export const parseRssFeed = (rssText) => {
  const parser = new DOMParser();
  const feed = parser.parseFromString(rssText, 'application/xml');
  const parserError = feed.querySelector('parsererror');

  if (parserError) {
    throw new Error('rss.invalid');
  }

  const items = feed.querySelectorAll('item');
  console.log('items',items);

  items.forEach((el) => {
    const title = el.querySelector('title')?.textContent;
    const link = el.querySelector('link')?.textContent;

    console.log(`Title: ${title}, Link: ${link}`);
  });
}