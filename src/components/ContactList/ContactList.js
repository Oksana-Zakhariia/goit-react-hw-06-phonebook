import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getContactsFilter } from 'redux/selectors';
// const getVisibleContacts = (contacts, filter) => {
//   contacts.map(contact => {
//     if (contact.name.includes(filter)) {
//       return contact;
//     }
//     return contacts;
//   });
// };

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = Object.values(useSelector(getContactsFilter));
  const normalizedFilterValue = filter;
  const filtredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilterValue);
  });
  // const visibleContacts = getVisibleContacts(contacts, filter);
  console.log(filter);

  return (
    <List>
      {filtredContacts &&
        filtredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact item={contact} />
            </li>
          );
        })}
    </List>
  );
};
