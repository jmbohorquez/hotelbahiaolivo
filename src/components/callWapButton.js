import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const BotonContactoContainer = styled.div`
    right: 2rem;
    bottom: 1rem;
    position: fixed;
    z-index: 9999;

    a{
        align-items: center;
        background-color: #FFF;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        height: 48px;
        margin: 1rem 0;
        width: 48px;

        img{
            height: 28px;
            width: auto;
        }
    }

    .whatsapp-button{
        background-color: #25d366;
    }

    .phone-button{
        background-color: #E85805;
    }
`;

const ContactoBoton = () => {

    const { whatsapp, phone } = useStaticQuery( 
        graphql`
            query{
                whatsapp: file(relativePath: {eq: "whatsapp.svg"}) {
                    publicURL
                }
                phone: file(relativePath: {eq: "smartphone.svg"}) {
                    publicURL
                }
            }
        ` 
    ); 
    
    const isPhone = useMediaQuery( { maxWidth: 414 } )

    return(
        <BotonContactoContainer>
            <a 
                href="https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20busco%20información%20sobre%20el%20hotel"
                className="whatsapp-button"
            ><img src={ whatsapp.publicURL } alt="Contacto hotel bahía olivo" /></a>
            
            { isPhone && (
                <a 
                    href="tel:+573143339798"
                    className="phone-button"
                ><img src={ phone.publicURL } alt="Contacto hotel bahía olivo" /></a>
            ) }
        </BotonContactoContainer>
    );

}

export default ContactoBoton;