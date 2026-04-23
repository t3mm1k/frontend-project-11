import { renderHero } from './hero.js';
import { renderFooter } from './footer.js';

export const renderPage = (t) => `
  <div class="app-shell min-vh-100 d-flex flex-column">
    <main class="flex-grow-1">
      ${renderHero(t)}
    </main>
    ${renderFooter(t)}
  </div>
`;
