import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ImageFinder.module.css';

class Button extends Component {
  static propTypes = {
    onLoadMore: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        className={styles.Button}
        type="button"
        onClick={this.props.onLoadMore}
      >
        Load more
      </button>
    );
  }
}

export default Button;
