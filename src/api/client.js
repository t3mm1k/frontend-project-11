import axios from 'axios'

export const fetchRssFeed = url =>
  axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`)
