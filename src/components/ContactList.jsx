
const ContactList = ({contacts, onDeletecontact}) => (
    <ul className="ContactList">
        {contacts.map(({id, name, number}) => (
            <li key={id}
            className='ContactList__item' 
            >{name}: {number}
            <button onClick={() => onDeletecontact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default ContactList;