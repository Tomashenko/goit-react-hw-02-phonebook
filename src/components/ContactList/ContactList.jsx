import PropTypes from 'prop-types';
import css from './СontactList.modul.css';

const ContactList = ({contacts, onDeletecontact}) => (
    <ul>
        {contacts.map(({id, name, number}) => (
            <li key={id}
            className='ContactList__item' 
            >{name}: {number}
            <button className='ContactList__btn' onClick={() => onDeletecontact(id)}>Delete</button>
            </li>
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

