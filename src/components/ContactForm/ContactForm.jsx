import { useAddContactsMutation } from 'services/contactsApi';
import { v4 as uuidv4 } from 'uuid';
import { ImPencil } from 'react-icons/im';
import styles from './ContactForm.module.css';

const nameInputId = uuidv4();
const numberInputId = uuidv4();

export const ContactForm = () => {
  const [addContact] = useAddContactsMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    console.log(`${name}: ${number}`);
    addContact({ name, phone: number });
    form.reset();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.contactLabel} htmlFor={nameInputId}>
        Name
      </label>
      <input
        className={styles.contactInput}
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <label className={styles.contactLabel} htmlFor={numberInputId}>
        Number
      </label>
      <input
        className={styles.contactInput}
        type="tel"
        name="number"
        id={numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      <button className={styles.buttonAdd} type="submit">
        <ImPencil style={{ marginRight: 5 }} />
        Add contact
      </button>
    </form>
  );
};
