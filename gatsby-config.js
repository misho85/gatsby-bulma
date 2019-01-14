require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const config = require('./config/website');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.title,
    titleAlt: config.titleAlt,
    titleTemplate: config.titleTemplate,
    siteUrl: config.siteUrl, // For gatsby-plugin-sitemap
    siteLanguage: config.siteLanguage,
    logo: config.logo, // Logo for JSONLD
    description: config.description,
    banner: config.logo,
    author: config.author,
    copyright: config.copyright,
    twitter: config.twitter,
    fbAppID: config.fbAppID
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.logo
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // your google analytics tracking id
        trackingId: config.gTagID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    {
      // must be after other CSS plugins
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: ['fullscreen-enabled']
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
