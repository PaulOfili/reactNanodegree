import React, { Component } from 'react';

class ListContact extends Component {
    render() {
        return (
            <li id={this.props.contact.id}
                className='contact-list-item'>
                <div
                    className='contact-avatar'
                    style={{
                        backgroundImage: `url(${this.props.contact.avatarURL}`
                    }}
                > </div>
                <div className='contact-details'>
                    <p>{this.props.contact.name}</p>
                    <p>{this.props.contact.handle}</p>
                </div>
                <button
                    className='contact-remove'
                    onClick={() => this.props.onDeleteContact(this.props.contact)}
                >
                    Remove
                </button>
            </li>
        )
    }
}

export default ListContact;
