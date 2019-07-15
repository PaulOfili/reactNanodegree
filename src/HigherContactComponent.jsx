import React, { Component } from 'react';
import ContactBody from './ContactBody';

class HigherContactComponent extends Component {


    render() {
        return (
            <div>
                <ContactBody />
                <br/>
                {/*<ContactBody />*/}
            </div>
        )
    }
}

export default HigherContactComponent;

