import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AppContainer, AppSection } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const currentContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(currentContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name))
      return alert(`${name} is alredy in contacts.`);

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const filterSettings = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterSettings)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <AppContainer>
        <AppSection>
          <h1 style={{ marginTop: '0px' }}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2 style={{ marginTop: '0px' }}>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          {this.state.contacts.length >= 1 ? (
            <ContactList
              contactsArray={filteredContacts}
              onClickHandler={this.deleteContact}
            />
          ) : (
            <p>Oooops, You have not added any contact yet</p>
          )}
        </AppSection>
      </AppContainer>
    );
  }
}
