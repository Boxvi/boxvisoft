// pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';

interface SitemapPageProps {}

const SITEMAP_URLS = [
  { url: '/', priority: 1.0 },
  { url: '/projects', priority: 0.8 },
  { url: '/contact', priority: 0.8 },
  // Agrega más URLs aquí
];

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (!res) {
    return {
      props: {},
    };
  }

  const baseUrl = 'https://boxvisoft.com';
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${SITEMAP_URLS.map(({ url, priority }) => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${priority}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};