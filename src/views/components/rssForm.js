export const renderRssForm = () => `
  <form class="rss-form">
    <div class="row g-3 align-items-start">
      <div class="col-12 col-md" id="input-div">
        <label class="visually-hidden" for="rss-url">Ссылка RSS</label>
        <input
          class="form-control form-control-lg rss-input"
          id="rss-url"
          name="rss-url"
          type="text"
          placeholder="Ссылка RSS"
        >
        <p class="form-text rss-example mb-0">Пример: https://lorem-rss.hexlet.app/feed</p>
        <p class="form-text rss-label mb-0"></p>
      </div>
      <div class="col-12 col-md-auto">
        <button class="btn btn-light btn-lg rss-submit hidden" type="submit" >Добавить</button>
      </div>
    </div>
  </form>
`;
