require("dotenv").config({
    path: `.env`
});

module.exports = {
    siteMetadata: {
        title: `Denzel's LifeLogs`,
        name: `Denzel Wamburu`,
        siteUrl: `https://wamburu.codes`,
        description: `Denzel Wamburu: My lifelog. Sharing thoughts, ideas & projects. `,
        hero: {
            heading: ``,
            // heading: `This is my lifelog and digital playground.`,
            maxWidth: 652
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/denzelwamburu`
            },
            {
                name: `github`,
                url: `https://github.com/wamburu`
            },
            {
                name: `instagram`,
                url: `https://instagram.com/denzellities`
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/wamburu/`
            }
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_TRACKING_ID
            }
        },
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                mailchimp: true,
                authorsPage: true,
                sources: {
                    local: true
                    // contentful: true,
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Denzel's LifeLogs`,
                short_name: `Denz W`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`
            }
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-offline`
        },
        {
            resolve: `gatsby-plugin-advanced-sitemap`
        },
        {
            resolve: `gatsby-plugin-slug`
        },
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT // add your MC list endpoint here; see plugin repo for instructions
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        }
    ]
};
