import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../styles/ImageFinder.module.css';

class ImageGallery extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
      }),
    ).isRequired,
    showModal: PropTypes.func.isRequired,
  };

  render() {
    const { hits, showModal } = this.props;

    return (
      <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            showModal={showModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
