import { createSlice } from '@reduxjs/toolkit';
import { createContact } from 'utils/createContact';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const contact = createContact(action.payload);
      if (contact) {
        state.push(contact);
      }
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
