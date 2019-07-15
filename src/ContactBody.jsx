import React, {Component} from 'react';
import ListContact from './ListContact';
import SearchFilter from './SearchFilter';
// import shortid from 'shortid';

class ContactBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            contacts: []
            // contacts: [
            //     {
            //         "id": shortid.generate(),
            //         "name": "Karen Isgrigg",
            //         "handle": "@karen_isgrigg",
            //         "avatarURL":'../src/img/karen.jpg'
            //     },
            //     {
            //         "id": shortid.generate(),
            //         "name": "Richard Kalehoff",
            //         "handle": "@richardkalehoff",
            //         "avatarURL":'../src/img/richard.jpg'
            //     },
            //     {
            //         "id": shortid.generate(),
            //         "name": "Tyler McGinnis",
            //         "handle": "@tylermcginnis",
            //         "avatarURL":'../src/img/tyler.jpg'
            //     }
            // ]
        };
        this.updateQuery = this.updateQuery.bind(this);
        this.removeContact = this.removeContact.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const myHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });

        fetch('http://localhost:5000/fakeData', {
            headers: myHeaders,
        })
            .then(response => response.json())
            // .then(parsedJSON => parsedJSON)
            .then((contacts) => {
                this.setState(() => ({
                    contacts
                }))
            })
            .catch(error => console.log(error))
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    };

    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c['id'] !== contact['id'];
            })
        }))
    };
    render() {
        const showingContacts = this.state.query === ''
            ? this.state.contacts
            : this.state.contacts.filter((c) => (
                c.name.toLowerCase().includes(this.state.query.toLowerCase())
            ));
        console.log(showingContacts);
        return (
            <div className='list-contacts'>
                <SearchFilter
                    query={this.state.query}
                    updateContact={this.updateQuery}/>

                <ol className='contact-list'>
                    {showingContacts.map((contact) => (
                        <ListContact
                            key={contact.id}
                            contact={contact}
                            onDeleteContact={this.removeContact}
                        />
                    ))}
                </ol>
            </div>
        );
    }
}

export default ContactBody;
