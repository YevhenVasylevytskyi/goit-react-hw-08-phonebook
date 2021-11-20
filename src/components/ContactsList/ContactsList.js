import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li className={style.item} key={contact.id}>
            <span>
              {contact.name}: {contact.phone}
            </span>
            <button
              className={style.button}
              type="button"
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
