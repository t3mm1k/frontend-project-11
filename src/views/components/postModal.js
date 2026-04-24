export const renderPostModal = (t) => `
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="postModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="postModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="post-modal-description mb-0"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${t('modal.close')}</button>
          <a class="btn btn-primary post-modal-link" href="#" target="_blank" rel="noopener noreferrer">${t('modal.readFullArticle')}</a>
        </div>
      </div>
    </div>
  </div>
`;
