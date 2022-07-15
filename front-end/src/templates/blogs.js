import { graphql } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { IoMdPaw } from "react-icons/io";

import SEO from "../components/SEO.jsx";
import BlogCards from "../components/blog/BlogCards";
import Pagination from "../components/Pagination.jsx";

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedOn, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        _rawExcerpt
        publishedOn
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
    sanityFeaturedBlog {
      blogs {
        _rawExcerpt
        title
        id
        categories {
          title
          slug {
            current
          }
        }
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
        author {
          name
        }
      }
    }
  }
`;

export default function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;
  const featuredBlog = data.sanityFeaturedBlog.blogs;

  console.log(featuredBlog);

  return (
    <>
      <SEO title='Blogs' />
      <section className='blogs'>
        <div className='blogs__hero'>
          <div className='blogs__background'>
            <div className='hero_rectangle'></div>
            <svg
              className='bezier__curve'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 240'
            >
              <path
                fill='#B1C63D'
                fillOpacity='1'
                d='M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,202.7C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
              ></path>
            </svg>
          </div>
          <div className='blogs__header'>
            <div className='blogs__overlay'>
              <h1>The Dog Blog</h1>
              <p>
                Follow us to learn about anything and everything in the world of
                dogs. From pet toys, to diet, grooming or behaviour we have you
                covered.
              </p>
            </div>
          </div>
        </div>
        <div className='blogs__content container'>
          <div className='blogs__subHeader' data-aos='zoom-in'>
            <IoMdPaw className='blogs__pawIcon' />
            <div className='blogs__title'>
              <StaticImage
                className='blogs__boneImg'
                src='../images/dog-bone.png'
                alt='logo image for for the love of dog'
              />
              <h2 className='blogs__h2'>Our Featured Blog</h2>
            </div>
          </div>
          <article className='blogs__featured'>
            <BlogCards blogs={featuredBlog} />
          </article>
          <div className='blogs__subHeader'>
            <IoMdPaw className='blogs__pawIcon' />
            <div className='blogs__title'>
              <StaticImage
                className='blogs__boneImg'
                src='../images/dog-bone.png'
                alt='logo image for for the love of dog'
              />
              <h2 className='blogs__h2'>Our Blogs</h2>
            </div>
          </div>
          <article className='featuredBlogs__cards'>
            <BlogCards blogs={blogs} />
          </article>
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL='/categories'
            />
          )}
        </div>
      </section>
    </>
  );
}
