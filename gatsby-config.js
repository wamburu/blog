module.exports = {
  siteMetadata: {
    title: `Denzel's Logs`,
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
        name: `Denzel's Logs`,
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
  ],
};
