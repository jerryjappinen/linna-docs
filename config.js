import { isDev } from './env'

// Meta data
export const siteAuthor = 'Jerry Jäppinen'
export const siteTitle = 'Linna'
export const siteTagline = 'JavaScript, Sass and Vue utilities'
export const siteDescription = 'Build user interfaces on the web fast.'
export const siteMainColor = '#ffffff' // '#21324b'
export const siteAccentColor = '#0052cd'
export const twitterUsername = 'jerryjappinen'
export const longSiteTitle = `${siteTitle} – ${siteTagline}`

// Assets
export const coverImagePath = 'cover-image.png'
export const faviconPath = 'favicon.svg'
export const icoFaviconPath = null // 'favicon.ico'
export const appleTouchIconPath = 'apple-touch-icon.png'
export const maskIconPath = 'mask-icon.svg'
export const maskIconColor = '#000000'
export const manifestPath = 'manifest.json'

// Paths
export const baseUrl = (process.env ? process.env.BASE_URL : null) || isDev
  ? 'http://localhost:3000'
  : 'https://linna.vercel.app'



// Pages
export const sassPages = [
  'body',
  'devices',
  'shadow'
]
export const utilPages = [
  'formatDate',
  'formatDateInterval',
  'formatFileSize',
  'formatInitials',
  'formatMachineReadableDate',
  'formatMachineReadableDateInterval',
  'formatMonth',
  'formatSlug',
  'getDomain',
  'getGravatarImageUrl',
  'getNameFromEmail',
  'isAbsoluteUrl',
  'isEmail',
  'toPlainText',
  'trimAllWhitespace',
  'trimNewLines',
  'trimWhitespace',
  'tryPromises',
  'wait'

]

export const componentPages = [
  'AppStoreBadge',
  'Buttons',
  'ClickButton',
  'DateInterval',
  'Dropdown',
  'Dump',
  'Ellipsis',
  'EmailLink',
  'ExternalLink',
  'GooglePlayBadge',
  'LiveDuration',
  'MobileWebAppBadge',
  'Slider',
  'Spinner',
  'Switch',
  'Textfield',
  'Tweet',
  'WebAppBadge'
]

export const composablePages = [
  'useCursor',
  // 'useGamepad',
  'useNetwork',
  'usePersist',
  'useTime',
  'useViewport'
]
