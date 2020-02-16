require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'A Light Chance of Snow',
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
        apiKey: 'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1',
        autopop: true
      }
    },
  ],
}
