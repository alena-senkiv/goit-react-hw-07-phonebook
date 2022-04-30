import PropTypes from 'prop-types';
import { ImBin } from 'react-icons/im';
import styles from './ContactListItem.module.css';
import { useDeleteContactsMutation } from 'services/contactsApi';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();
  return (
    <li className={styles.contactListItem}>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => deleteContact(id)}>
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
