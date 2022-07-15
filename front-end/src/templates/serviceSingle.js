import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import SEO from "../components/SEO.jsx";
import HandlePortableText from "../components/HandlePortableText.jsx";

import { IoMdPaw } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const serviceQuery = graphql`
  query singleServiceQuery($id: String!) {
    sanityServices(id: { eq: $id }) {
      title
      subtitle
      _id
      _rawBody
      price
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default function ServicesSingle({ data }) {
  const service = data.sanityServices;

  return (
    <>
      <SEO title={service.title} />
      <section className='servicesSingle'>
        <div className='servicesSingle__hero'>
          <div className='servicesSingle__background'>
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
          <div className='servicesSingle__header'>
            <div className='servicesSingle__overlay'>
              <h1>Our Services</h1>
            </div>
          </div>
        </div>
        <article className='servicesSingle__content container'>
          <h2>{service.title}</h2>
          <GatsbyImage
            image={service.coverImage.asset.gatsbyImageData}
            alt={service.coverImage.alt}
            className='servicesSingle__image'
          />
          <p className='servicesSingle__price'>
            P$ <span>{service.price}</span>
          </p>
          <div className='servicesSingle__body'>
            <HandlePortableText value={service._rawBody} />
          </div>
        </article>
        <aside className='servicesSingle__menu'>
          <h2>Book an appointment today!</h2>
          <ul className='servicesSingle__links'>
            <li>
              <IoMdPaw className='servicesSingle__pawIcons' />
              <a href='tel:7801234567'>
                <FaPhoneAlt className='servicesSingle__linkIcon' />
                <p>By Phone</p>
              </a>
            </li>
            <li>
              <IoMdPaw className='servicesSingle__pawIcons' />
              <a href='mailto:example@email.com' className='footer__icon'>
                <IoMail className='servicesSingle__linkIcon' />
                <p>By Email</p>
              </a>
            </li>
          </ul>
        </aside>
        <div className='container'>
          <Link to='/services' className='servicesSingle__link'>
            <p>Return to Services</p>
            <IoMdPaw className='servicesSingle__pawIcon' />
          </Link>
        </div>
      </section>
    </>
  );
}
