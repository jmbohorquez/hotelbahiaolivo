module.exports = {
  siteMetadata: {
    title: `Hotel Bahía Olivo`,
    description: `Hotel en Villa de Leyva, Hotel Boutique y Spa Bahia Olivo, sobre la avenida circunvalar muy cerca a la Plaza Principal y el centro histórico de Villa de Leyva.`,
    author: `Hotel Bahía Olivo, Villa de Leyva`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-plugin-emotion`,
        options: {
            'cssPropOptimization': true 
        }
    },
    {
        resolve: "gatsby-source-wordpress",
        options: {
            baseUrl: "bahiaolivo.i180.co",
            protocol: "https",
            hostingWPCOM: false,
            useACF: true,
            verboseOutput: false,
        },
        includedRoutes: [
            "**/habitaciones",
            "**/planes"
          ],
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
