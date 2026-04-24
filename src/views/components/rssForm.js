export const renderRssForm = t => `
  <form class="rss-form">
    <div class="row g-3 align-items-start">
      <div class="col-12 col-md" id="input-div">
        <label class="visually-hidden" for="rss-url">${t('form.label')}</label>
        <input
          class="form-control form-control-lg rss-input"
          id="rss-url"
          name="rss-url"
          aria-label="url"
          type="text"
          placeholder="${t('form.placeholder')}"
        >
        <p class="form-text rss-example mb-0">${t('form.example')}</p>
        <p class="form-text rss-label feedback mb-0"></p>
      </div>
      <div class="col-12 col-md-auto">
        <button class="btn btn-light btn-lg rss-submit hidden" type="submit" >${t('form.submit')}</button>
      </div>
    </div>
  </form>
`
