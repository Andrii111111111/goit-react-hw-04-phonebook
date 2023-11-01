import { ContactsWraper, DelButt } from './ContactList.styles';

export const ContactList = ({ contacts, deleteCon }) => {
  return (
    <ContactsWraper>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <DelButt type="button" onClick={() => deleteCon(contact.id)}>
              Delete
            </DelButt>
          </li>
        ))}
      </ul>
    </ContactsWraper>
  );
};
