import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ImageFinder.module.css';

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  render() {
    const { largeImageURL, closeModal } = this.props;
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={largeImageURL} />
        </div>
        <button
          type="button"
          className={styles.ModalButton}
          onClick={() => closeModal()}
        ></button>
      </div>
    );
  }
}

export default Modal;
