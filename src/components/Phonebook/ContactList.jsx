import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styles from './Phonebook.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
