import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
