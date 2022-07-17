import mdPlugin from 'vite-plugin-markdown'

// Markdown imports
export default {
  vite: {
    plugins: [
      mdPlugin({
        mode: 'vue',
        markdownIt: {
          html: true,
          linkify: true,
          typographer: false
        }
      })
    ]
  }
}
