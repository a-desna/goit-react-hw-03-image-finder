import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import { imagesService } from '../../services-api/apiService';
import styles from '../styles/ImageFinder.module.css';

class ImageFinder extends Component {
  state = {
    hits: [],
    isLoading: false,
    query: '',
    page: 1,
    error: null,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ isLoading: true });

    imagesService(this.state.query, this.state.page)
      .then(hits =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        this.scroll();
      });
  };

  handleSearch = query => {
    if (!query) {
      return;
    }
    this.setState({ query, hits: [], page: 1 });
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  showModal = ImageURL => {
    this.setState({ largeImageURL: ImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { hits, isLoading, error, largeImageURL } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSearch={this.handleSearch} />
        {error && <p>Что-то пошло не так: {error.message}</p>}
        {hits.length > 0 && (
          <ImageGallery hits={hits} showModal={this.showModal} />
        )}
        {isLoading && <Loader />}
        {hits.length > 0 && !isLoading && (
          <Button onLoadMore={this.fetchImages} />
        )}
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default ImageFinder;
