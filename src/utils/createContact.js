import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const createContact = ({ contacts, name, number }) => {
  const contact = {
    id: uuidv4(),
    name,
    number,
  };

  const normalizedName = contact.name.toLowerCase();

  if (!name.trim() || !number.trim()) {
    toast.error('Please, enter Name and Number', { position: 'top-center' });
    return;
  }

  if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
    toast.warn(`${name} is already in contacts`);
    return;
  }
  return contact;
};
