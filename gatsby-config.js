require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
        js: 'https://cdn.snipcart.com/themes/v3.0.7/default/snipcart.js'
      }
    },
  ],
}
