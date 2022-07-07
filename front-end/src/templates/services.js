import { graphql } from "gatsby";
import React from "react";

import ServiceCards from "../components/service/ServiceCards.jsx";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO.jsx";

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
      <h1>hello</h1>
      <ServiceCards services={services} />
    </>
  );
}
