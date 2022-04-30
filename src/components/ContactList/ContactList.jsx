import { useGetContactsQuery } from 'services/contactsApi';
import { ContactListItem } from 'components/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const { data = [] } = useGetContactsQuery();
  console.log(data);
  return (
    <ul className={styles.contactList}>
      {data.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};
