exports.createPages = async ({ graphql, actions}) => {
    const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE ) || 10

    const blogHomeTemplate = require.resolve('./src/templates/blogs.js')
    const singleBlogTemplate = require.resolve('./src/templates/blogSingle.js')
    const singleCategoryTemplate = require.resolve('./src/templates/categorySingle.js')
    const categoryHomeTemplate = require.resolve('./src/templates/categories.js')
    const singleServiceTemplate = require.resolve('./src/templates/serviceSingle.js')
    const servicesHomeTemplate = require.resolve('./src/templates/services.js')
    const aboutTemplate = require.resolve('./src/templates/about.js')

    const { createPage } = actions
    const result = await graphql(`
        {
            allSanityBlog {
                nodes {
                id
                slug {
                    current
                }
                }
            }
            allSanityCategory {
            nodes {
                id
                slug {
                current
                }
            }
            }
            allSanityAuthor {
            nodes {
                id
                slug {
                current
                }
            }
            }
            allSanityServices {
                nodes {
                id
                slug {
                    current
                }
                }
            }
        }
    `)

    if (result.errors) throw result.errors

    const blogs = result.data.allSanityBlog.nodes
    const categories = result.data.allSanityCategory.nodes
    const services = result.data.allSanityServices.nodes
    const about = result.data.allSanityAuthor.nodes

    // single blogs pages
    blogs.forEach((blog) => {
        createPage({
            path: `/blogs/${blog.slug.current}`,
            component: singleBlogTemplate,
            context: { id: blog.id }
        })
    })

    // single category pages

    categories.forEach((category) => {
        createPage({
          path: `/categories/${category.slug.current}`,
          component: singleCategoryTemplate,
          context: { id: category.id }
        })
    })

    // single services pages

    services.forEach((service) => {
        createPage({
          path: `/services/${service.slug.current}`,
          component: singleServiceTemplate,
          context: { id: service.id }
        })
    })

    // about page

    about.forEach((author) => {
        createPage({
            path: `/about`,
            component: aboutTemplate,
            context: { id: author.id }
        })
    })

     // blog home page

     const totalBlogPages = Math.ceil(blogs.length / postsPerPage)
     Array.from({ length: totalBlogPages }).forEach((_, index) => {
       createPage({
         path: index === 0 ? '/blogs' : `/blogs/${index + 1}`,
         component: blogHomeTemplate,
         context: {
             limit: postsPerPage,
             offset: index * postsPerPage,
             numberOfPages: totalBlogPages,
             currentPage: index + 1,
         },
       })
     })

     // categories home page

     const totalCategoryPages = Math.ceil(categories.length / postsPerPage)
     Array.from({ length: totalCategoryPages}).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/categories' : `/categories/${index + 1}`,
            component: categoryHomeTemplate,
            context: {
            limit: postsPerPage,
            offset: index * postsPerPage,
            numberOfPages: totalCategoryPages,
            currentPage: index + 1,
            },
        })
     })

     // services home page

     const totalServicePages = Math.ceil(categories.length / postsPerPage)
     Array.from({ length: totalServicePages}).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/services' : `/services/${index + 1}`,
            component: servicesHomeTemplate,
            context: {
            limit: postsPerPage,
            offset: index * postsPerPage,
            numberOfPages: totalCategoryPages,
            currentPage: index + 1,
            },
        })
     })

}