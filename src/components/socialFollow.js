import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

const SocialContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    a{
        align-items:center;
        background-color: #FFF;
        border-radius:50%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: flex;
        justify-content:center;
        height: 32px;
        width: 32px;

        img{
            height: 20px;
            width: auto;
        }

        :last-of-type{
            img{
                height: auto;
            width: 20px;
            }
        }
        
    }
`;

const SocialFollow = () => {

    const { facebook, instagram, tripadvisor } = useStaticQuery( 
        graphql`
            query{
                facebook: file(relativePath: {eq: "facebook.svg"}) {
                    publicURL
                }
                instagram: file(relativePath: {eq: "instagram.svg"}) {
                    publicURL
                }
                tripadvisor: file(relativePath: {eq: "tripadvisor.svg"}) {
                    publicURL
                }
            }
        ` 
    ); 
    
    return(
        <SocialContainer>
            <a
                href="https://www.facebook.com/bahiaolivo/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={ facebook.publicURL } alt="Facebook hotel Bahía Olivo" />
            </a>
            <a 
                href="https://www.instagram.com/hotelbahiaolivo/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={ instagram.publicURL } alt="Instagram hotel Bahía Olivo" />
            </a>
            <a 
                href="https://www.tripadvisor.co/Hotel_Review-g676524-d1526920-Reviews-Hotel_Bahia_Olivo_Boutique_Spa-Villa_de_Leyva_Boyaca_Department.html"
                target="_blank"
                rel="noreferrer"
            >
                <img src={ tripadvisor.publicURL } alt="Tripadvisor hotel Bahía Olivo" />
            </a>
        </SocialContainer>
    );

}

export default SocialFollow;