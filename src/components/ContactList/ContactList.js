import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getContactsFilter } from 'redux/selectors';
// import { getContacts, getContactsFilter } from 'redux/selectors';
// const getVisibleContacts = (contacts, filter) => {
//   contacts.map(contact => {
//     if (contact.name.includes(filter)) {
//       return contact;
//     }
//     return contacts;
//   });
// };

export const ContactList = () => {
  const contacts = Object.values(useSelector(getContacts));
  console.log(contacts);
  const filter = Object.values(useSelector(getContactsFilter));
  // const normalizedFilterValue = filter;
  // const filtredContacts = contacts.map(contact => {
  //   return contact.name.includes(normalizedFilterValue);
  // });
  // const visibleContacts = getVisibleContacts(contacts, filter);
  console.log(filter);

  return (
    <List>
      {contacts &&
        contacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact item={contact} />
            </li>
          );
        })}
    </List>
  );
};
