module.exports = {
  siteMetadata: {
    title: `Denzel's Musings`,
    name: `Denzel`,
    siteUrl: `https://wamburu.codes`,
    description: `Denzel Wamburu: Sharing thoughts, ideas & projects and `,
    hero: {
      heading: ``,
      // heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
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
        url: `https://www.linkedin.com/i/wamburu/`,
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
        name: `Novela by Narative`,
        short_name: `Novela`,
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
