import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import { useGetContactsQuery } from 'services/contactsApi';
import {
  Container,
  ContactForm,
  ContactList,
  Filter,
  Loader,
} from 'components';
import { getVisibleContacts } from 'utils/getVisibleContacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const { data = [], isLoading } = useGetContactsQuery();
  const visibleContacts = data && getVisibleContacts(data, filter);

  return (
    <Container>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.secondaryTitle}>Contacts</h2>

      {isLoading ? (
        <Loader />
      ) : data?.length > 0 ? (
        <Filter
          value={filter}
          onInputChange={e => setFilter(e.currentTarget.value)}
        />
      ) : (
        <p> There are no any contacts in your phonebook</p>
      )}
      {visibleContacts && <ContactList contacts={visibleContacts} />}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
