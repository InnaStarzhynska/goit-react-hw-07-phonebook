export const getContacts = state => state.contacts.items;

export const getFilterValue = state => state.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilterValue(state);

  if (contacts && filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
  }
  return contacts
};
