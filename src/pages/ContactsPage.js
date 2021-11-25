import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import ContactList from '../components/Phonebook/ContactList';
import ContactForm from '../components/Phonebook/ContactForm';
import Filter from '../components/Phonebook/Filter';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(contactsSelectors.getAllContacts);

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <>
      <ContactForm contacts={contacts} />
      <Filter />
      {isLoadingContacts ? <CircularProgress /> : <ContactList />}
    </>
  );
}
