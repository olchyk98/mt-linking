// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Oink Docs',
      plugins: [ starlightThemeRapide() ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/olchyk98/mt-linking',
        },
      ],
      sidebar: [
        {
          label: 'Overview',
          items: [
            { label: 'Welcome', slug: 'index' },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Purpose & Scope', slug: 'getting-started/overview' },
            { label: 'Installation & Setup', slug: 'getting-started/installation' },
          ],
        },
        {
          label: 'Using Oink',
          items: [
            { label: 'CLI Commands', slug: 'using-oink/commands' },
            { label: 'Learned Registry', slug: 'using-oink/registry' },
            { label: 'Linking Strategies', slug: 'using-oink/linking-strategies' },
            { label: 'Live Reload & Watching', slug: 'using-oink/live-reload' },
          ],
        },
        {
          label: 'Advanced Usage',
          items: [
            { label: 'Workspace Support', slug: 'advanced/workspaces' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Cheatsheet & FAQ', slug: 'reference/cheatsheet' },
            { label: 'Day-to-Day Tips', slug: 'reference/tips' },
          ],
        },
      ],
    }),
  ],
})
