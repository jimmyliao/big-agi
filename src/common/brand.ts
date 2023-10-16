/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'consulting-bot',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'consulting-bot',
  },
  Meta: {
    Description: 'Consulting Bot, a medical chatbot for doctors and patients',
    SiteName: 'consulting-bot',
    ThemeColor: '#32383E',
    TwitterSite: '@jimmyliao',
  },
  URIs: {
    Home: 'https://jimmyliao.net/consulting-bot',
    // App: 'https://get.consulting-bot.com',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/enricoros/big-agi',
    SupportInvite: 'https://discord.gg/4JJsemSu',
    // Twitter: 'https://www.twitter.com/enricoros',
  },
};