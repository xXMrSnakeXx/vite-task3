import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
