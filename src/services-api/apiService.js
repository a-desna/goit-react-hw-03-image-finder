import axios from 'axios';

export const imagesService = (query = '', page = 1) =>
  axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=16691292-2f3f42c714dd5f594c7c8ab9b&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
