require("dotenv").config("./.env");

const sanityConfig = require("./sanity-config");

module.exports = {
  siteMetadata: {
    title: `front-end`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `site description goes here`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glslify`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
  ],
};
