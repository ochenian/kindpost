require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path');

module.exports = {
  siteMetadata: {
    siteName: ' kindpost',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      // options: { apiToken: process.env.DATO_API_TOKEN },
      options: { apiToken: 'ebf324cd8b9b3ec1102109722a5295' }
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'NDMxYjEwZmUtZDgyZC00MmZiLWI2NjUtY2M2MjQ0MTMzZmVkNjM3MTc0NzQ4OTc2Mjk3NDMz',
        autopop: false,
        js: 'https://cdn.snipcart.com/themes/v3.0.7/default/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.css',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svg/
        }
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kindpost.`,
        short_name: `kindpost.`,
        start_url: `/`,
        background_color: `#FF1654`,
        theme_color: `#FF1654`,
        display: `standalone`,
        icon: `src/assets/KP_Thumbnail.png`
      },
    },
  ],
}
