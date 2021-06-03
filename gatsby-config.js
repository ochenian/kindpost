require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    siteName: 'kindpost',
    siteUrl: 'https://www.kindpostco.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-anchor-links',
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: { offset: -100 },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kindpost.',
        short_name: 'kindpost.',
        start_url: '/',
        background_color: '#FF1654',
        theme_color: '#FF1654',
        display: 'standalone',
        icon: 'src/assets/favicon-32x32.png',
      },
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'video',
        prefix: 'videos/',
      },
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        prefix: 'images/',
      },
    },
    {
      resolve: 'gatsby-theme-shopify-manager',
      options: {
        shopName: 'Kindpost',
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_ID,
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_ID],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        apiVersion: '2020-07',
        verbose: true,
        paginationSize: 250,
        includeCollections: ['shop', 'content'],
        shopifyQueries: {
          products: `
          query GetProducts($first: Int!, $after: String) {
            products(first: $first, after: $after) {
              pageInfo {
                hasNextPage
              }
              edges {
                cursor
                node {
                  availableForSale
                  createdAt
                  description
                  descriptionHtml
                  handle
                  id
                  images(first: 250) {
                    edges {
                      node {
                        id
                        altText
                        originalSrc
                      }
                    }
                  }
                  metafields(first: 250) {
                    edges {
                      node {
                        description
                        id
                        key
                        namespace
                        value
                        valueType
                      }
                    }
                  }
                  onlineStoreUrl
                  options {
                    id
                    name
                    values
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  productType
                  publishedAt
                  tags
                  title
                  updatedAt
                  variants(first: 250) {
                    edges {
                      node {
                        availableForSale
                        quantityAvailable
                        compareAtPrice
                        compareAtPriceV2 {
                          amount
                          currencyCode
                        }
                        id
                        image {
                          altText
                          id
                          originalSrc
                        }
                        metafields(first: 250) {
                          edges {
                            node {
                              description
                              id
                              key
                              namespace
                              value
                              valueType
                            }
                          }
                        }
                        price
                        priceV2 {
                          amount
                          currencyCode
                        }
                        requiresShipping
                        selectedOptions {
                          name
                          value
                        }
                        sku
                        title
                        weight
                        weightUnit
                        presentmentPrices(first: 250) {
                          edges {
                            node {
                              price {
                                amount
                                currencyCode
                              }
                              compareAtPrice {
                                amount
                                currencyCode
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  vendor
                }
              }
            }
          }
        `,
        },
      },
    },
  ],
};
