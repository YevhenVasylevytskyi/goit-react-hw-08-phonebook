import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../../redux/contacts';
import style from './ContactForm.module.css';

function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const dispatch = useDispatch();
  const addContact = contact =>
    dispatch(contactsOperations.addNewContact(contact));

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts) {
      if (contacts.some(contact => contact.name.includes(name))) {
        alert(`${name} is already in contacts!`);
        resetForm();
        return;
      }
    }

    const contact = {
      name: name,
      number: number,
    };

    addContact(contact);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan..."
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input_number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
