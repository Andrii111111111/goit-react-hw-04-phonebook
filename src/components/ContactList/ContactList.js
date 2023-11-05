import { ContactsWraper, DelButt } from './ContactList.styles';

export const ContactList = ({ contacts, deleteCon }) => {
  const renderContact = contacts();
  return (
    <ContactsWraper>
      <ul>
        {renderContact.map(contact => (
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
