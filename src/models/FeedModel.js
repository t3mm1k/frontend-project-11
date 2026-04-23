import { proxy } from 'valtio/vanilla'

const createFeedModel = () => proxy({
  form: {
    currentValue: '',
    error: null,
    status: 'idle'
  },
  rssStore: {
    feeds: [],
    posts: []
  }
});

export { createFeedModel };