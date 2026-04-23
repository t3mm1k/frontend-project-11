import { renderRssForm } from './rssForm.js';

export const renderHero = () => `
  <section class="hero-section">
    <div class="container-xl">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <h1 class="display-3 mb-2">RSS агрегатор</h1>
          <p class="lead mb-4">Начните читать RSS сегодня! Это легко, это красиво.</p>
          ${renderRssForm()}
        </div>
      </div>
    </div>
  </section>
`;
