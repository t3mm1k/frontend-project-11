const createLayout = () => `
  <div class="app-shell min-vh-100 d-flex flex-column">
    <main class="flex-grow-1">
      <section class="hero-section">
        <div class="container-xl">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-9">
              <h1 class="display-3 mb-2">RSS агрегатор</h1>
              <p class="lead mb-4">Начните читать RSS сегодня! Это легко, это красиво.</p>

              <form class="rss-form">
                <div class="row g-3 align-items-start">
                  <div class="col-12 col-md">
                    <label class="visually-hidden" for="rss-url">Ссылка RSS</label>
                    <input
                      class="form-control form-control-lg rss-input"
                      id="rss-url"
                      name="rss-url"
                      type="url"
                      placeholder="Ссылка RSS"
                    >
                    <p class="form-text rss-example mb-0">Пример: https://lorem-rss.hexlet.app/feed</p>
                  </div>
                  <div class="col-12 col-md-auto">
                    <button class="btn btn-light btn-lg rss-submit" type="button">Добавить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer py-3">
      <div class="container-xl text-center">
        <span></span>
      </div>
    </footer>
  </div>
`;

export const createFeedView = (container) => {
  container.innerHTML = createLayout();
};
