import { proxy } from 'valtio/vanilla'

const createFeedModel = () => proxy({
  form: {
    currentValue: '',
    feeds: [],
    error: null,
    status: 'idle'
  }
});

export { createFeedModel };