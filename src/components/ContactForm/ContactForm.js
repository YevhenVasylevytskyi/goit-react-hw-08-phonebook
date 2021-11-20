import { useState } from 'react';
import style from './ContactForm.module.css';
import { useCreateContactMutation } from '../../redux/phonebook/phonebookApi';

function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addNewContact] = useCreateContactMutation();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

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
      phone: phone,
    };

    addNewContact(contact);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
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
        Phone
        <input
          className={style.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={phone}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
