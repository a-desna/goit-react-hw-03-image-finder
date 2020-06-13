import React, { Component } from 'react';
import createId from '../utils/CreateId';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        {
          id: createId(),
          name,
          number,
        },
      ],
    }));
  };

  handleFilterChange = ({ filter }) => {
    this.setState({
      filter,
    });
  };

  handleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredByContact = filter
      ? contacts.filter(contact => contact.name.includes(filter))
      : contacts;
    return filteredByContact;
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={styles.phonebook}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onAdd={this.handleAddContact} />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length >= 2 && (
          <ContactFilter onFilterChange={this.handleFilterChange} />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={this.filterContacts()}
            onDelete={this.handleDeleteContact}
          />
        )}
      </div>
    );
  }
}

export default Phonebook;
