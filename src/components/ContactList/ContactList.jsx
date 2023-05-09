import PropTypes from 'prop-types';
import { ContactList__btn, ContactList__item } from './СontactList.styled.jsx';

const ContactList = ({contacts, onDeletecontact}) => (
    <ul>
        {contacts.map(({id, name, number}) => (
            <ContactList__item key={id}
               >{name}: {number}
            <ContactList__btn onClick={() => onDeletecontact(id)}>Delete</ContactList__btn>
            </ContactList__item>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  
export default ContactList;

