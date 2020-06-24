import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ImageFinder.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  render() {
    const { webformatURL, largeImageURL, showModal } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt={webformatURL}
          onClick={() => showModal(largeImageURL)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
