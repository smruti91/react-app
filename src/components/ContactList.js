import React from 'react'
import { Link } from 'react-router-dom';
import Contact from './Contact';


const ContactList = (props) => {
    const deleteContactHandler = (id)=> {
        props.getContactId(id);
    }
    //remove Props. here
     
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
        <div className="main">
            <h2  style={{ margin:"45px" , color:"brown" }} >
                Contact List
                <Link to="/add" >
                    <button className="ui button blue right" style={{float: "right"}}>Add Contact</button>
                </Link>
               
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
        
    )
}

export default ContactList
