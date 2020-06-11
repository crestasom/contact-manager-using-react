import React, { Component } from 'react'
import { Consumer } from '../../context'
class AddContact extends Component {
    constructor(props) {
        super(props)

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }



    onSubmit = (dispatch, event) => {
        event.preventDefault();
        //dispatch({ type: "ADD_CONTACT", payload: this.state })
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact)
    }

    static defaultProps = {
        name: "Som",
        email: "som@mail.com",
        phone: "7777"
    }


    render() {
        const { name, email, phone } = this.props
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            ref={this.nameInput}
                                            placeholder="Enter Name .."
                                            defaultValue={name}
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            defaultValue={email}
                                            ref={this.emailInput}
                                            placeholder="Enter Email .."
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            id="phone"
                                            type="text"
                                            name="phone"
                                            defaultValue={phone}
                                            ref={this.phoneInput}
                                            placeholder="Enter Phone No .."
                                            className="form-control form-control-lg" />
                                    </div>
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