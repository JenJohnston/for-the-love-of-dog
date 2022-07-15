import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";

import SEO from "../components/SEO.jsx";
import HandlePortableText from "../components/HandlePortableText.jsx";

import { CgCalendarDates } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedOn
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

export default function BlogsSingle({ data }) {
  const blog = data.sanityBlog;
  return (
    <>
      <SEO title={blog.title} />
      <section className='blog'>
        <div className='blog__hero'>
          <div className='blog__background'>
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
          <div className='blog__header'>
            <GatsbyImage
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt}
              className='blog__image'
            />
            <div className='blog__overlay'>
              <h1>{blog.title}</h1>
            </div>
          </div>
        </div>
        <div className='blog__content container'>
          <div className='blog__details'>
            <h3 className='blog__date'>
              <CgCalendarDates className='blog__icon' />
              {blog.publishedOn && (
                <p className='card__date'>
                  {format(new Date(blog.publishedOn), "p, MMMM dd, yyyy")}
                </p>
              )}
            </h3>
            <h3 className='blog__categories'>
              <MdOutlineCategory className='blog__icon' />
              {blog.categories.map((item, index) => (
                <p key={item.slug.current}>
                  <Link to={`/categories/${item.slug.current}`}>
                    {item.title}
                  </Link>
                  {index < blog.categories.length - 1 ? " | " : ""}
                </p>
              ))}
            </h3>
            <h3 className='blog__author'>
              <BsPersonCircle className='blog__icon' />
              <Link to={`/about`}>{blog.author.name}</Link>
            </h3>
          </div>
          <article className='blog__body'>
            <HandlePortableText value={blog._rawBody} />
          </article>
          <Link to='/blogs' className='blog__link'>
            <p>Return to Blogs</p>
            <IoMdPaw className='blog__pawIcon' />
          </Link>
        </div>
      </section>
    </>
  );
}
