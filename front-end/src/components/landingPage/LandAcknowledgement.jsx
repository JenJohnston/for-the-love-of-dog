import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function LandAcknowledgement() {
    

    return (
        <section className='land container'>
            <div className="land__header">
                <h2>Land Acknowledgement</h2>
                <StaticImage
                    className='land__img'
                    src="../../images/landscape-painting.png"
                    alt="logo image for for the love of dog"
                    
                />
            </div>
            <div className="land__content">
            <p>For the Love of dog acknowledges we operate on Treaty 6 Territory. We acknowledge this land as the traditional territories of many First Nations such as the Nehiyaw, Denesuliné, Nakota Sioux, Anishinaabe, and Niitsitapi, and is the traditional homeland of the Metis.</p>
            <p>We are grateful for the Traditional Knowledge Keepers and Elders who are still with us today and those who have gone before us. We make this acknowledgment as an act of gratitude to those whose territory we reside on.</p>
            <p>Land acknowledgment graciously written by Ekko Wapos. Thank you for your kindness!</p>
            </div>
           
        </section>
    )
}
