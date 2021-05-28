import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import {uuid} from 'uuidv4';
import ContactDetails from './ContactDetails';
// test for git
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
            <Router>
            <Header />
            <Switch>
                <Route 
                path="/add" 
                exact 
                render = {(props) => (
                    <AddContact {...props} addContactHandler = {addContactHandler} />
                 )}
                
                />

                <Route 
                path="/" 
                exact 
                render = {(props) => (
                    <ContactList {...props} contact={contacts}  getContactId = {removeContactHandler} />
                )}
               
               />
               <Route path="/contact/:id" component = {ContactDetails} />
            </Switch>
            
            {/* <AddContact addContactHandler = {addContactHandler} />
            <ContactList contact={contacts} 
             getContactId = {removeContactHandler}
            /> */}
            </Router>
            
        </div>
    )
}

export default App
