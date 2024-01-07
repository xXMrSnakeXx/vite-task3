const Contact = ({ name, id, number, deleteContact }) => {
  return (
    <div>
      <p>
        {name} : <span>{number}</span>
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
