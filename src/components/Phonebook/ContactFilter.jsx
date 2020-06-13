import React, { Component } from 'react';
import styles from './Phonebook.module.css';

class ContactFilter extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = e => {
    this.setState(
      {
        filter: e.target.value,
      },
      () => this.props.onFilterChange(this.state),
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={styles.filterForm}>
        <label>
          <p>Find contact by name</p>
          <input
            type="text"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </label>
      </div>
    );
  }
}

export default ContactFilter;
