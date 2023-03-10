import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getContactsFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  // console.log(filter);
  const visibleContacts = [];
  // console.log(contacts);
  contacts.filter(contact => {
    if (contact.name.includes(filter.toLowerCase())) {
      return visibleContacts.push(contact);
    }
    return visibleContacts;
  });
  return visibleContacts;
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getContactsFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);
  // console.log(visibleContacts);

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact item={contact} />
            </li>
          );
        })}
    </List>
  );
};
