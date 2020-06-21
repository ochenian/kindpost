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
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    // {
    //   resolve: 'gatsby-plugin-snipcartv3',
    //   options: {
    //     apiKey: process.env.SNIPCART_API_TOKEN,
    //     autopop: true,
    //   }
    // },
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
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `video`,
        prefix: `videos/`
      }
    },
    // {
    //   resolve: 'gatsby-plugin-snipcartv3',
    //   options: {
    //     apiKey: process.env.SNIPCART_API_KEY,
    //     autopop: true
    //   }
    // },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
          version: '3.0.15',
          publicApiKey: process.env.SNIPCART_API_KEY,
          defaultLang: 'en',
          currency: 'usd',
          openCartOnAdd: true,
          locales: {
          },
          innerHTML: `<cart-header title="My Bag" showItemsCount="true" showAccountMenu="true" showSummary="true" backButtonTitle="true">
            <div class="cart-header">
              <span class="title">Your Bag</span>
              <close-cart-action>
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Remove item" title="Remove item" class="snipcart__icon--darker snipcart__icon--medium snipcart__icon--angled snipcart__icon"><path d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z" fill="#313749"></path></svg>
              </close-cart-action>
            </div>
          </cart-header>`,
      },
    },
  ],
}
