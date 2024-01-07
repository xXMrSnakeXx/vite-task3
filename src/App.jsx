import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";
import ContactForm from "./components/ContactForm/ContactForm";




const initContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem("contacts"))?? initContacts)
  const [filter, setFilter] = useState("")
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])

  const addContact = (data) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts(prev=>([...prev, data]))
  }
  const deleteContact = id => {
    setContacts(prev=> prev.filter(contact=> contact.id !== id))
  }
  const handleChange = value => {
    setFilter(value)
  }
  const visibleContacts = () => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onHandleSubmit={addContact} />
      <SearchBar filter={filter} handleChange={handleChange} />
      <ContactList contacts={visibleContacts()} deleteContact={deleteContact} />
    </>
  );
}

export default App
