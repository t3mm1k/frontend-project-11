import { renderRssForm } from './rssForm.js';

export const renderHero = (t) => `
  <section class="hero-section">
    <div class="container-xl">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <h1 class="display-3 mb-2">${t('app.title')}</h1>
          <p class="lead mb-4">${t('app.description')}</p>
          ${renderRssForm(t)}
        </div>
      </div>
    </div>
  </section>
`;
