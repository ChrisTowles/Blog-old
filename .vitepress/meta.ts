// noinspection ES6PreferShortImport: IntelliJ IDE hint to avoid warning to use `~/contributors`, will fail on build if changed

/* Texts */
export const authorName = 'Chris Towles'
export const siteShortName = 'Chris.Towles.dev'
export const siteDescription = 'Full Stack Developer - Usually in Vue, Node with Typescript tinkering with everything else'

/* CDN fonts and styles */
export const googleapis = 'https://fonts.googleapis.com'
export const gstatic = 'https://fonts.gstatic.com'
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* head settings */
export const author = 'Chris Towels';
export const ogUrl = 'https://chris.towles.dev/'
export const ogImage = `${ogUrl}og.png`
export const email = 'hi.chris.towles@gmail.com'

/* GitHub and social links */
export const github = 'https://github.com/ChrisTowles'
export const twitter = 'https://twitter.com/Chris_Towles'

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic]
export const preconnectHomeLinks = [googleapis, gstatic]

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, 'i')
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, 'i')
// eslint-disable-next-line prefer-regex-literals
export const githubusercontentRegex = new RegExp('^https://((i.ibb.co)|((raw|user-images).githubusercontent.com))/.*', 'i')
