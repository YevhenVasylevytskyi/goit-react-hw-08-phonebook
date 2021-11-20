import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/phonebook/phonebookApi';
import { connect } from 'react-redux';
import Section from '../components/Section/Section';
import ContactList from '../components/ContactsList/ContactsList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Fliter/Filter';
import * as actions from '../redux/phonebook/filter/filter-actions.js';

function ContactsPage({ filter, changeFilter }) {
  const { data, error, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  function filtration(value) {
    if (value === '') {
      return data;
    } else {
      return data.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  return (
    <>
      <Section title="Phonebook">
        <ContactForm contacts={data} />
      </Section>

      <Section>
        <Filter filter={filter} onChangeFilter={changeFilter} />
      </Section>

      <Section title="Contacts">
        {isFetching && <h4>Loading...</h4>}
        {data && (
          <ContactList
            contacts={filtration(filter)}
            deleteContact={deleteContact}
          />
        )}
        {error && <h4>{error}</h4>}
      </Section>
    </>
  );
}

const mapStateToProps = state => ({
  filter: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(actions.changeFilter(value.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
