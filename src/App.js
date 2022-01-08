import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import React,{ useState,useEffect } from 'react';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts,contact])
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setcontacts(retriveContacts);
  },[]);
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div>
      <Header/>
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
