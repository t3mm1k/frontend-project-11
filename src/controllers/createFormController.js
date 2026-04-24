import formSchema from '../utils/formSchema.js'
import { fetchRssFeed } from '../api/client.js'
import { parseRssFeed } from '../utils/parseRssFeed.js'
import { getErrorKey } from '../utils/getErrorKey.js'

const createFormController = (view, state) => {
  view.onInput((newValue) => {
    state.form.currentValue = newValue
    state.form.status = 'idle'
    state.form.error = null
  })
  view.onSubmit((newValue) => {
    state.form.currentValue = newValue
    state.form.status = 'sending'
    state.form.error = null
    formSchema.validate({
      url: state.form.currentValue,
      feeds: state.rssStore.feeds,
    }).then((res) => {
      return fetchRssFeed(res.url).then(response => ({
        response,
        rssUrl: res.url,
      }))
    }).then(({ response, rssUrl }) => {
      const { posts, feed } = parseRssFeed(response.data.contents)
      state.rssStore.feeds.push({
        ...feed,
        rssUrl,
      })
      state.rssStore.posts = state.rssStore.posts.concat(posts)
      state.form.status = 'success'
    }).catch((err) => {
      state.form.status = 'failed'
      state.form.error = getErrorKey(err)
    })
  })
}

export { createFormController }
