import { renderHero } from './hero.js'
import { renderFooter } from './footer.js'
import { renderPosts } from './posts.js'
import { renderFeeds } from './feeds.js'
import { renderPostModal } from './postModal.js'

export const renderPage = t => `
  <div class="app-shell min-vh-100 d-flex flex-column">
    <main class="flex-grow-1">
      ${renderHero(t)}
      <section class="rss-content py-5">
        <div class="container-xl">
          <div class="row g-4 align-items-start">
            <div class="col-12 col-lg-8">
              ${renderPosts(t)}
            </div>
            <div class="col-12 col-lg-4">
              ${renderFeeds(t)}
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderPostModal(t)}
    ${renderFooter(t)}
  </div>
`
