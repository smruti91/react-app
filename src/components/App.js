import React, { useEffect, useState } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import {uuid} from 'uuidv4';

const App = () => {
    const LOCAL_STORAGE_KEY = "contact";
    const [contacts,setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts,{id:uuid(), ...contact}]);
    }

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact)=>{
            return contact.id !==id ;
        });
        setContacts(newContactList);

    }

    useEffect(()=>{
     const retriveKeyItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     if (retriveKeyItem)
     {
        setContacts(retriveKeyItem);
     }
    },[]);
   useEffect(()=>{
       localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
   },[contacts]);


    return (
        <div className="ui container">
            <Header />
            <AddContact addContactHandler = {addContactHandler} />
            <ContactList contact={contacts} 
             getContactId = {removeContactHandler}
            />
        </div>
    )
}

export default App
