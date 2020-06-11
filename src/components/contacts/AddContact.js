import React, { Component } from 'react'
import { Consumer } from '../../context'
import InputGroup from '../layout/InputGroup'
import ContactService from '../../service/ContactService'

class AddContact extends Component {
    state = {
        id: this.props.match.params.id,
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = async (dispatch, event) => {
        event.preventDefault();
        const { id, name, phone, email } = this.state
        if (name === "") {
            this.setState({ errors: { ...this.state.errors, name: "Name Cannot be Empty" } })
            return
        }
        if (email === "") {
            this.setState({ errors: { ...this.state.errors, email: "Email Cannot be Empty" } })
            return
        }
        if (phone === "") {
            this.setState({ errors: { ...this.state.errors, phone: "Phone Cannot be Empty" } })
            return
        }
        let contact = { name, email, phone }
        if (id !== -1) {
            contact = { ...contact, id }
        }
        const res = await ContactService.saveContact(contact)
        const dispatchType = id === -1 ? "ADD_CONTACT" : "UPDATE_CONTACT"
        dispatch({ type: dispatchType, payload: res.data })
        this.setState({
            id: '',
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push("/")
    }
    async componentDidMount() {
        const { id } = this.state
        if (id === -1) {
            return
        }
        const res = await ContactService.getContact(id)
        const { name, email, phone } = res.data
        this.setState({
            name,
            email,
            phone
        })
    }
    render() {
        const { name, email, phone, errors } = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <InputGroup lblName="Name" name="name" onChange={this.onChange} placeHolder="Enter Name.." defValue={name} error={errors.name} />
                                    <InputGroup lblName="Email" name="email" type="email" onChange={this.onChange} placeHolder="Enter Email.." defValue={email} error={errors.email} />
                                    <InputGroup lblName="Phone" name="phone" onChange={this.onChange} placeHolder="Enter Phone.." defValue={phone} error={errors.phone} />
                                    <input type="submit" value="Add Contact" className="btn btn-success btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;