import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'
import ContactService from '../../service/ContactService'


class Contact extends Component {
    state = {
        showContactInfo: true
    }

    onDeleteClick = async (id, dispatch) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            await ContactService.deleteContact(id)
            dispatch({ type: "DELETE_CONTACT", payload: id })
        }

    }


    render() {
        const { id, name, email, phone } = this.props.contact
        const { history } = this.props
        const { showContactInfo } = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{"  "}
                                <i className="fas fa-sort-down" onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} style={{ cursor: 'pointer' }} />
                                <i className='fas fa-times' style={{ cursor: "pointer", float: "right", color: "red" }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                                <i className='fas fa-edit' style={{ cursor: "pointer", float: "right", color: "green" }} onClick={() => history.push(`contact/add/${id}`)}></i>
                            </h4>
                            {showContactInfo ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired

}
export default Contact