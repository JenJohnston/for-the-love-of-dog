import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/SEO.jsx";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

import HandlePortableText from "../components/HandlePortableText.jsx";

import { IoMdPaw } from "react-icons/io";

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

export default function About({ data }) {
  const author = data.sanityAuthor;
  return (
    <>
      <SEO title='About' />
      <section className='aboutPage'>
        <div className='aboutPage__hero'>
          <div className='aboutPage__background'>
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
          <div className='aboutPage__header'>
            <div className='aboutPage__overlay'>
              <h1>Let Me Say Hello</h1>
            </div>
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.profileImage.alt}
              className='aboutPage__image'
            />
          </div>
        </div>
        <div className='aboutPage__content container'>
          <div className='aboutPage__subHeader'>
            <IoMdPaw className='aboutPage__pawIcon' />
            <div className='aboutPage__title'>
              <StaticImage
                className='aboutPage__boneImg'
                src='../images/dog-bone.png'
                alt='logo image for for the love of dog'
              />
              <h2 className='aboutPage__h2'>We Love Dogs</h2>
            </div>
          </div>
          <div className='aboutPage__sectionOne'>
            <StaticImage
              className='aboutPage__sectionOneImg'
              src='../images/about-one.jpg'
              alt='logo image for for the love of dog'
            />
            <div className='aboutPage__bio'>
              <HandlePortableText value={author._rawBio} />
            </div>
          </div>
          <div className='aboutPage__subHeader'>
            <IoMdPaw className='aboutPage__pawIcon' />
            <div className='aboutPage__title'>
              <StaticImage
                className='aboutPage__boneImg'
                src='../images/dog-bone.png'
                alt='logo image for for the love of dog'
              />
              <h2 className='aboutPage__h2'>...like really love them</h2>
            </div>
          </div>
          <div className='aboutPage__sectionTwo'>
            <div className='aboutPage__gallery'>
              <StaticImage
                className='aboutPage__sectionTwoImg'
                src='../images/about-two.jpg'
                alt='logo image for for the love of dog'
              />
              <StaticImage
                className='aboutPage__sectionTwoImg'
                src='../images/about-three.jpg'
                alt='logo image for for the love of dog'
              />
              <StaticImage
                className='aboutPage__sectionTwoImg'
                src='../images/about-four.jpg'
                alt='logo image for for the love of dog'
              />
            </div>
            <div>
              <p>
                For the Love of Dog goes beyond traditional dog training and
                behaviour modification, using up-to-date scientific research,
                empathy and kindness, to help you and your dog thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
