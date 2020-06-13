import React, { Component } from 'react';
import styles from './Phonebook.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.name.value === '') {
      return;
    }
    this.props.onAdd(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Name.."
          value={name}
          onChange={this.handleInputChange}
        />
        <p>Number</p>
        <input
          type="text"
          name="number"
          placeholder="Number.."
          value={number}
          onChange={this.handleInputChange}
        />
        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
