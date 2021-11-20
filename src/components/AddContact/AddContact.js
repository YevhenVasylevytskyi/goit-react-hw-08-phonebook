import { useCreateContactMutation } from 'redux/phonebook/phonebookApi';
import style from './AddContact.module.css';

const AddContact = () => {
  const [createContact] = useCreateContactMutation();

  const handleSubmit = event => {
    event.preventDefault();
    // const {value} = event.currentTarget.elements
    // createContact(value.name.value, value.phone.value);
    const name = event.currentTarget.elements.name.value;
    const phone = event.currentTarget.elements.phone.value;
    const contactValue = { name, phone };
    console.log(`name: ${name}`);
    console.log(`phone: ${phone}`);
    createContact(contactValue);
    event.currentTarget.reset();
  };

  return (
    <>
      <form autoComplete="off" className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} /*htmlFor={loginInputId}*/>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            //   id={loginInputId}
            //   value={name}
            //   onChange={handleChange}
          />
        </label>

        <label className={style.label}>
          Phone
          <input
            className={style.input_number}
            type="tel"
            name="phone"
            placeholder="Phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            // id={numberInputId}
            // phone={phone}
            // onChange={handleChange}
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default AddContact;
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import contactsActions from '../../redux/contacts-1/contacts-actions';
// import shortid from 'shortid';
// import style from './FormAddContact.module.css';

// export default function FormAddContact() {
//   const loginInputId = shortid.generate();
//   const numberInputId = shortid.generate();
//   const contactInputId = shortid.generate();

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   // const contacts = useSelector(state => state.contacts.items);
//   const dispatch = useDispatch();
//   const onSubmit = (name, number) =>
//     dispatch(contactsActions.addContact(name, number));

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     const contact = {
//       id: contactInputId,
//       name: name,
//       number: number,
//     };

//     onSubmit(contact);
//     resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <label className={style.label} htmlFor={loginInputId}>
//         Name
//         <input
//           className={style.input}
//           type="text"
//           name="name"
//           placeholder="Name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           id={loginInputId}
//           value={name}
//           onChange={handleChange}
//         />
//       </label>

//       <label className={style.label} htmlFor={numberInputId}>
//         Namber
//         <input
//           className={style.input_number}
//           type="tel"
//           name="number"
//           placeholder="Namber"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//           id={numberInputId}
//           value={number}
//           onChange={handleChange}
//         />
//       </label>
//       <button className={style.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

// FormAddContact.protoType = {
//   onSubmit: PropTypes.func,
// };
