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
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: 'Kindpost',
        accessToken: 'a108d5424d5dae2ede62a9624dea1949',
      },
    },
    // {
    //   resolve: `gatsby-plugin-snipcart-advanced`,
    //   options: {
    //       version: '3.0.15',
    //       publicApiKey: process.env.SNIPCART_API_KEY,
    //       defaultLang: 'en',
    //       currency: 'usd',
    //       openCartOnAdd: true,
    //       locales: {
    //       },
    //       innerHTML: `<cart-header title="My Bag" showItemsCount="true" showAccountMenu="true" showSummary="true" backButtonTitle="true">
    //         <div class="cart-header">
    //           <span class="title">Your Bag</span>
    //           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="179.3487850139584 234.9429453879407 305.5830353537872 100.60839160839208" width="150" height="40"><defs><text id="dJdOwyKhz" x="228.14" y="-55.73" font-size="70" font-family="Averia Serif Libre" font-weight="normal" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -47.794786414619104 302.67365967366067)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="228.14" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">kindpost</tspan></text><style id="averiaseriflibrenormalnormal">
    // </style><path d="M479.47 299.93C481.28 300.41 482.35 301.92 481.78 304.09C480.2 310.11 473.13 310.36 473.09 310.53C473.09 310.53 473.09 310.53 473.09 310.53C473.13 310.36 467.09 306.67 468.67 300.65C469.24 298.48 470.63 297.62 472.44 298.09C473.64 298.41 474.57 299.85 475.21 302.43C476.84 300.45 478.26 299.62 479.47 299.93Z" id="a1rED58nz"></path></defs><g><g id="b1K0OMiyZS"><use xlink:href="#dJdOwyKhz" opacity="1"  fill-opacity="0.84"></use></g><g><use xlink:href="#a1rED58nz" opacity="1" fill-opacity="1" fill="#d4004c"></use></g></g></svg>
    //           <close-cart-action>
    //             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Remove item" title="Remove item" class="snipcart__icon--darker snipcart__icon--medium snipcart__icon--angled snipcart__icon"><path d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z" fill="#313749"></path></svg>
    //           </close-cart-action>
    //         </div>
    //       </cart-header>`,
    //   },
    // },
  ],
}
