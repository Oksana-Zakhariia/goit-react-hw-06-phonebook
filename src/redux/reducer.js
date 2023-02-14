const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export const setContactsFilter = (state = initialContacts, action) => {
  const visibleContacts = [];

  switch (action.type) {
    case 'filter/setStatusFilter':
      break;
    //      if (contact.name.includes(action.payload)) {
    //       return visibleContacts.push(contact);
    //       }
    default:
      return state;
    //   }
  }
};
