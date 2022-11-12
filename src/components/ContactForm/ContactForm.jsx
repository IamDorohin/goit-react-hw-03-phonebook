import { Component } from 'react';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleDataChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  pushContactNameHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContainer onSubmit={this.pushContactNameHandler}>
        <FormLabel>
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleDataChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          <FormInput
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleDataChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton>Add contact</FormButton>
      </FormContainer>
    );
  }
}
