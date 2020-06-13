import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { name, number, onDelete } = this.props;
    return (
      <li className={styles.listItem}>
        <span className={styles.listItemName}>{name}:</span>
        <span className={styles.listItemNumber}>{number}</span>
        <button className={styles.listItemBtn} onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactItem;
