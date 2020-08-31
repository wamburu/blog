const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Denzel's LifeLogs`,
    name: `Denzel Wamburu`,
    siteUrl: `https://wamburu.codes`,
    description: `Denzel Wamburu: My lifelog. Sharing thoughts, ideas & projects. `,
    hero: {
      heading: ``,
      // heading: `This is my lifelog and digital playground.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/denzelwamburu`,
      },
      {
        name: `github`,
        url: `https://github.com/wamburu`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/denzellities`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/wamburu/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Denzel Wamburu Logs`,
        short_name: `Denz W`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-offline`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "wamburu.codes",
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`
    },
  ],
};
