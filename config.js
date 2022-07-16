import { isDev } from './env'

// Meta data
export const siteAuthor = 'Miscelle Team'
export const siteTitle = 'Miscelle'
export const siteTagline = 'Miscellaneous cr*p as a service'
export const siteDescription = 'Orchestrate integrations, manage data, API keys and collaborate with your team.'
export const siteMainColor = '#ffffff' // '#21324b'
export const siteAccentColor = '#0052cd'
export const twitterUsername = 'jerryjappinen'
export const longSiteTitle = `${siteTitle} – ${siteTagline}`

// Paths
export const baseUrl = (process.env ? process.env.BASE_URL : null) || isDev
  ? 'http://localhost:3000'
  : 'https://linna.vercel.app'
export const splashImagePath = baseUrl + '/splashImage.jpg'

// Pages
export const sassPages = [
  'body',
  'devices'
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
  'getContentfulImageUrl',
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
  'ExternalLink'
]

export const composablePages = [
  'cursor',
  'network',
  'time',
  'viewport'
]
