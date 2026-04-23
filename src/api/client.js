import axios from 'axios';

export const fetchRssFeed = (url) =>
  axios.get(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(url)}`)
