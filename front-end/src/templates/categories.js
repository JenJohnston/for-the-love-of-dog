import { graphql } from "gatsby";
import React from "react";

import Pagination from "../components/Pagination";
import SEO from "../components/SEO.jsx";
import CategoryCards from "../components/category/CategoryCards.jsx";

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

export default function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  console.log(categories);

  return (
    <>
      <SEO title='Categories' />
      <section className='categories'>
        <div className='categories__hero'>
          <div className='categories__background'>
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
          <div className='categories__header'>
            <div className='categories__overlay'>
              <h1>Our Categories</h1>
              <p>
                Follow us to learn about anything and everything in the world of
                dogs. From pet toys, to diet, grooming or behaviour we have you
                covered.
              </p>
            </div>
          </div>
        </div>
        <div className='categories__content'>
          <aside>
            <CategoryCards categories={categories} />
          </aside>
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
