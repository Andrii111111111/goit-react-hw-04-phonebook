/* eslint-disable array-callback-return */

import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { useState, useEffect } from "react";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
 
  
  const deleteContacs = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id))
  }

  const chengeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const formSubmitEnd = (data) => {
    if (contacts.find(({ name }) =>
      name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts((prevContacts) => [...prevContacts, { ...data, id: nanoid() }])
  }
  
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])


  useEffect((setContacts) => {

    if (setContacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, setContacts])



 
  const contactFilter = () => {const filtred = contacts.filter(contact=> {
 
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
      return contact
    }

  })
    return filtred
}


  return (
   
    <>
      <Form onSubmit={formSubmitEnd} />
      <Filter filter={setFilter} onChengeFilter={chengeFilter}/>
      <ContactList contacts={contactFilter}
        deleteCon = {deleteContacs}
      />
    </>)


}



