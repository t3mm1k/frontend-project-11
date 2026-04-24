export const createModalController = (view, state) => {
  view.onPostPreview((postId) => {
    state.ui.viewedPosts.push(postId)
    state.ui.modalPostId = postId
  })

  view.onModalClose(() => {
    state.ui.modalPostId = null
  })
}
