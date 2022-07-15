import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import HandlePortableText from "../components/HandlePortableText.jsx";

import SEO from "../components/SEO.jsx";
import BlogCards from "../components/blog/BlogCards.jsx";

import { IoMdPaw } from "react-icons/io";

export const categoryQuery = graphql`
  query SingleCategoryQuery($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        title
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
  }
`;

export default function CategorySingle({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;

  console.log(category);
  return (
    <>
      <SEO title={category.title} />
      <section className='category'>
        <div className='category__hero'>
          <div className='category__background'>
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
          <div className='category__header'>
            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              alt={category.coverImage.alt}
              className='category__image'
            />
            <div className='category__overlay'>
              <h1>{category.title}</h1>
              <HandlePortableText value={category._rawDescription} />
            </div>
          </div>
        </div>
        <div className='featuredBlogs__cards container'>
          <BlogCards blogs={blogs} />
          <Link to='/categories' className='category__link'>
            <p>Return to Categories</p>
            <IoMdPaw className='category__pawIcon' />
          </Link>
        </div>
      </section>
    </>
  );
}
