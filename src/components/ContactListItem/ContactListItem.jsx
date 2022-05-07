import PropTypes from 'prop-types';
import { ImBin } from 'react-icons/im';
import styles from './ContactListItem.module.css';
import { useDeleteContactMutation } from 'services/contactsApi';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const handleDeleteContact = id => {
    deleteContact(id)
      .unwrap()
      .then(payload => console.log('fulfilled', payload))
      .catch(error => console.error('rejected', error));
  };

  return (
    <li className={styles.contactListItem}>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => handleDeleteContact(id)}>
        <ImBin style={{ marginRight: 5 }} />
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
