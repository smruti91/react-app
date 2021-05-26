import React from 'react'
import Contact from './Contact';

const ContactList = (props) => {
    const deleteContactHandler = (id)=> {
        props.getContactId(id);
    }
    const renderContactList = props.contact.map((contact) =>{
        return(
            <Contact 
            contact ={contact}  
            clickHandler = {deleteContactHandler}
            key={contact.id}
            />
        )
    })
    return (
        <div className="ui celled list">
           {renderContactList}
        </div>
    )
}

export default ContactList
