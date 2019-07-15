import React, { Component } from 'react';

class SearchFilter extends Component {
    render() {
        return (
            <div className='list-contacts-top'>
                <input
                    className='search-contacts'
                    placeholder='Search Contacts'
                    type="text"
                    value={this.props.query}
                    // onChange={(e) => this.updateQuery(e.target.value)}
                    onChange={(e) => this.props.updateContact(e.target.value)}
                />
            </div>
        )
    }
}

export default SearchFilter;