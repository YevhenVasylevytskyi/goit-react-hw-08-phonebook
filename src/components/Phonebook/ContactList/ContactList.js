import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../../redux/contacts';
import style from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  function filtration(value) {
    if (value === '') {
      return contacts;
    } else {
      return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  return (
    <ul className={style.list}>
      {filtration(filter).map(contact => {
        return (
          <li className={style.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className={style.button}
              type="button"
              id={contact.id}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
