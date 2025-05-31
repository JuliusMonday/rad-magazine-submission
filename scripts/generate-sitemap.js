/**
 * scripts/generate-sitemap.js
 *
 * This script uses the `sitemap` package to build a sitemap.xml
 * containing all of your React Router–driven URLs. When you run
 * `npm run build` (or `yarn build`), it will place `sitemap.xml`
 * into `public/`, so Vercel can serve it at
 *    https://nauradsa-official.vercel.app/sitemap.xml
 */
// scripts/generate-sitemap.js (ESM Version)

import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const HOSTNAME = 'https://nauradsa-official.vercel.app'

const routes = [
  { url: '/',           changefreq: 'daily',  priority: 1.0 },
  { url: '/about',      changefreq: 'monthly',priority: 0.7 },
  { url: '/events',     changefreq: 'weekly', priority: 0.8 },
  { url: '/membership', changefreq: 'weekly', priority: 0.7 },
  { url: '/magazine',   changefreq: 'weekly', priority: 0.7 },
  { url: '/contact',    changefreq: 'monthly',priority: 0.6 },
]

async function generateSitemap() {
  try {
    const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml')
    const writeStream = createWriteStream(sitemapPath)

    const sitemap = new SitemapStream({ hostname: HOSTNAME })
    sitemap.pipe(writeStream)

    routes.forEach(page => sitemap.write(page))

    sitemap.end()
    await streamToPromise(sitemap)

    console.log('✅ sitemap.xml generated at:', sitemapPath)
  } catch (err) {
    console.error('❌ Failed to generate sitemap:', err)
    throw err
  }
}

generateSitemap()
