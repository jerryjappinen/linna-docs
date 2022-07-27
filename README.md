# Linna

Collection of JavaScript, Sass and Vue code to help you with your projects.

## Installation

```sh
# Sass
npm i linna-sass

# JavaScript utilities
npm i linna-util

# Vue components, requires the other components
npm i linna-scss linna-util linna-vue
```

## Using Sass

See [`linna-sass`](https://npmjs.org/package/linna-sass)

## Using utils

```js
import { formatInitials } from 'linna-util'

formatInitials('James Jackson') // JJ
```

See [`linna-util`](https://npmjs.org/package/linna-util)

## Using Vue components

See [`linna-vue`](https://npmjs.org/package/linna-vue)

## Using Pinia stores

See [`linna-vue`](https://npmjs.org/package/linna-vue)

### Icons

Some Vue components rely on SVG icon assets. Since these are user-configurable, you must choose where to get them (or manually use the defaults from `linna-icons`).

Linna assumes you import SVG icons as Vue components (using `vite-svg-loader`, for example). The `Vector` and `Icon` components can be used to render these SVG components easily.

To completely replace the default icon set, provide the following icons:

```
Check.svg
ChevronDown.svg
```

### Nuxt module

Install `linna-vue` as a Nuxt module to auto-import `components/`.

```js
defineNuxtConfig({
  modules: ['linna-vue']
})
```

## Development

This repo is a Nuxt 3 app. Run it like so:

```sh
nvm use 16
npm i
npm run dev
```

If you want, you can easily link it to your local source files for developing each of the modules:

```sh
# .env
ALIAS_LINNA_ICONS = "../linna-icons"
ALIAS_LINNA_SASS = "../linna-sass"
ALIAS_LINNA_SVG = "../linna-svg"
ALIAS_LINNA_UTIL = "../linna-util"
ALIAS_LINNA_VUE = "../linna-vue"
```

## Todo

- [] Get code samples from separate files.
- [] Add syntax highlighting
- [] Example page that uses `useLazyAsyncData`

```js
const { data: users, pending, refresh, error } = await useLazyFetch(() => `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL }
);
```
