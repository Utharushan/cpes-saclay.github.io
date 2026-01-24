export function getLocalePrefix(url: URL): string {
  return url.pathname.startsWith('/en') ? '/en' : '';
}

export function localizeHref(href: string, url: URL): string {
  if (!href || href.startsWith('http') || href.startsWith('#')) {
    return href;
  }
  const prefix = getLocalePrefix(url);
  if (href.startsWith('/en')) {
    return href;
  }
  return `${prefix}${href}`;
}
