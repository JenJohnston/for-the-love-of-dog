import { graphql } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ServiceCards from "../components/service/ServiceCards.jsx";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO.jsx";

import { IoMdPaw } from "react-icons/io";

export const ServicesQuery = graphql`
  query serviceListQuery($limit: Int!, $offset: Int!) {
    allSanityServices(
      sort: { fields: price, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        subtitle
        slug {
          current
        }
        price
        _rawBody
        _rawExcerpt
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

export default function Services({ data, pageContext }) {
  const services = data.allSanityServices.nodes;
  console.log(services);

  return (
    <>
      <SEO title='Services' />
      <section className='servicesPage'>
        <div className='servicesPage__hero'>
          <div className='servicesPage__background'>
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
          <div className='servicesPage__header'>
            <div className='servicesPage__overlay'>
              <h1>Our Services</h1>
              <p>
                Follow us to learn about anything and everything in the world of
                dogs. From pet toys, to diet, grooming or behaviour we have you
                covered.
              </p>
            </div>
          </div>
        </div>
        <div className='servicesPage__content container'>
          <div className='servicesPage__subHeader'>
            <IoMdPaw className='servicesPage__pawIcon' />
            <div className='servicesPage__title'>
              <StaticImage
                className='servicesPage__boneImg'
                src='../images/dog-bone.png'
                alt='logo image for for the love of dog'
              />
              <h2 className='servicesPage__h2'>Home of Pet Perfection</h2>
            </div>
          </div>
          <div className='servicesPage__wrapper'>
            <ServiceCards services={services} />
          </div>
        </div>
      </section>
    </>
  );
}
