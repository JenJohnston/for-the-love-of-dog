import React from 'react'
import { PortableText } from '@portabletext/react'
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';


export default function HandlePortableText({value}) {
    
    const portableTextComponents = {
        types: {
            customImage: ({ value }) => {
                const imageData = getImage(value.asset, sanityConfig).asset;
                const { width, height } = getImageDimensions(value);
          
                const image = {
                  url: imageData.url,
                  width,
                  height,
                };
          
                const gatsbyImageData = getSanityImageData({
                  image,
                  layout: 'constrained',
                });
          
                return (
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt={value.alt}
                    className="bodyImage"
                  />
                );
              }
        }
    }

    return (

        <PortableText
            value={value}
            components={portableTextComponents}
        />
            
    )
}