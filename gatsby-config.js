module.exports = {
  siteMetadata: {
    title: `Victor Nwokeocha`,
    description: `Personal Resume`,
    author: `Victor Nwokeocha`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Victor-Nwokeocha`,
        short_name: `Victor`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#222`,
        display: `minimal-ui`,
        icon: `src/images/my-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
