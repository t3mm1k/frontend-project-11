export const parseRssFeed = (rssText) => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(rssText, 'application/xml');
  const parserError = xmlDocument.querySelector('parsererror');

  if (parserError) {
    throw new Error('rss.invalid');
  }

  const channel = xmlDocument.querySelector('channel');

  if (!channel) {
    throw new Error('rss.invalid');
  }

  const items = Array.from(channel.querySelectorAll('item'));

  const posts = items.map((el) => {
    const title = el.querySelector('title')?.textContent;
    const link = el.querySelector('link')?.textContent;

    return { title, link };
  });

  const feed = {
    title: channel.querySelector('title')?.textContent,
    link: channel.querySelector('link')?.textContent,
    description: channel.querySelector('description')?.textContent,
  };

  return {
    posts,
    feed,
  }
}
