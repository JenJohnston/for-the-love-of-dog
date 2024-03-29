require("dotenv").config("./.env");

const sanityConfig = require("./sanity-config");
const siteUrl = process.env.URL || `https://for-the-love-of-dog.vercel.app/`

module.exports = {
  siteMetadata: {
    title: `For The Love Of Dog`,
    siteUrl: `https://for-the-love-of-dog.vercel.app/`,
    description: `homepage for Edmonton based Dog Groomer For The Love Of Dog`,
    author: `https://jennifer-johnston.netlify.app/`,
    keywords: `Dog's, Dog Groomer, Dog Groomer in Edmonton, Pet Training, Dog Training, Dog Groomer Near Me, Dog Wash, Puppy Wash, Puppy Training, Puppy Cut`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glslify`,
    `gatsby-transformer-gitinfo`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/" || "./src/templates/",
      },

    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                name
              }
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages},
          allFile: { edges: pageFiles }
        }) => {
          return allPages.map(page => {
            const pageFile = pageFiles.find(({ node }) => {
              const fileName = node.name === 'index' ? '/' : `/${node.name}/`
              return page.path === fileName
            })

            return {...page, ...pageFile?.node?.fields}
          })
        },
        serialize: ({ path, gitLogLatestDate }) => {
          return {
            url: path,
            lastmod: gitLogLatestDate,
          }
        },
        createLinkInHead: true,
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blogs',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedOn
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedOn', 'slug', 'coverImage'],
        normalizer: ({data}) => 
          data.allSanityBlog.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              publishedOn: node.publishedOn,
              slug: node.slug,
              coverImage: node.coverImage
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'categories',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityCategory {
            nodes {
              id
              title
              slug {
                current
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'slug' ],
        normalizer: ({data}) => 
          data.allSanityCategory.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              slug: node.slug,
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'services',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityServices {
            nodes {
              id
              title
              price
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'price', 'slug', 'coverImage'],
        normalizer: ({data}) => 
          data.allSanityServices.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              price: node.price,
              slug: node.slug,
              coverImage: node.coverImage
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://for-the-love-of-dog.vercel.app/`,
        sitemap: `https://for-the-love-of-dog.vercel.app/sitemap/sitemap-0.xml`,
        policy: [{userAgent: '*', allow: '/'}],

      },
    },
  ],
};
