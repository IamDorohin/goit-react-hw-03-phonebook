import PropTypes from 'prop-types';
import {
  Contacts,
  ContactItem,
  ContactDetails,
  ContactButton,
} from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contactsArray, onClickHandler }) => {
  return (
    <Contacts>
      {contactsArray.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactDetails> {name} </ContactDetails>
            <ContactDetails> {number} </ContactDetails>
            <ContactButton type="button" onClick={() => onClickHandler(id)}>
              Delete
            </ContactButton>
          </ContactItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickHandler: PropTypes.func.isRequired,
};
