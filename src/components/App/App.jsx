import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import { Container, ContactForm, ContactList } from 'components';

export const App = () => {
  return (
    <Container>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.secondaryTitle}>Contacts</h2>
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
