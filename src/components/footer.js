import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import SocialFollow from './socialFollow';

const FooterContainer = styled.footer`
    background-color: #000;
    display: flex;
    flex-flow: column;
    padding: 4rem 0;
                    
    p{
        color: #FFF;
        font-weight: 100;
        font-size: 1.2rem;
        text-align: center;
    }
    ul{
        color: #FFF;
        list-style: none;
        margin: 0%;
        padding: 0;
        font-weight: 100;
        font-size: 1.2rem;
        text-align: center;

    }

    h3{
        color: #FFF;
        text-align: center;
        font-size: 2rem;
    }

    .column-1{
        img{
            display: block;
            height: 64px;
            margin: 0 auto 2rem;
        }
    }
    .column-2{
        strong{
            display: block;
        }
    }
    .column-4{
        div{
            margin: auto;
            width: fit-content;

            a{
                margin: 0 1rem;
            }
            
        }
    }

    @media( min-width: 769px ){
        grid-column: 1 / 3;
        grid-row: 2 / 3;

        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;

        p{
            text-align: left;
        }

        ul{
            text-align: left;
        }

        .footer-column{
            padding: 1rem;
            width: 25%;

            h3{
                margin-top: 0;
                text-align: left;
            }
        }

        .column-1{
            img{
                height: 64px;
                margin: 0 0 2rem;
            }

            p{

            }
        }

        .column-2{
            p{
                text-align: left;
            }
        }

        .column-4{
            div{
                margin: 0;

                a:first-child{
                    margin-left: 0;
                }
                
            }
        }
    }
`;

const Footer = () => {
    
    const { logo } = useStaticQuery(
        graphql`
            query {
                logo: file(relativePath: {eq: "logo.svg"}) {
                    publicURL
                }
            }`
    );
        
    
    return(
        <FooterContainer>
            <div className="footer-column column-1">
                <img src={ logo.publicURL } alt="Hotel Bahía Olivo - Villa de Leyva"   />
                <p>
                    <i>http://www.hotelbahiaolivo.com</i> <br />
                    <i>Hotel Bahía Olivo © {new Date().getFullYear()}</i> <br />
                    <i>RNT 7897</i>
                </p>
            </div>
            <div className="footer-column column-2">
                <h3>Contáctanos</h3>
                <p><strong>Celular</strong> <i>314 333 9798</i><br/>
                <i>315 316 8685</i></p>
                <p><strong>Email</strong> <a href="mailto: info@hotelbahiaolivo.com"><i>info@hotelbahiaolivo.com</i></a></p>
                <p><strong>Teléfono</strong> <i>(8) 732 0989</i></p>
            </div>
            <div className="footer-column column-3">
                <h3>Vínculos</h3>
                <ul>
                    <li><a href="/terminos-condiciones">Políticas de reserva</a></li>
                    <li><a href="/politica-privacidad">Políticas de manejo de datos</a></li>
                    <li><a href="/politica-sostenibilidad">Políticas de sostenibilidad</a></li>
                    <li><a href="/politica-proteccion-menores">Políticas de protección de menores</a></li>
                </ul>
            </div>
            <div className="footer-column column-4">
                <h3>Síguenos</h3>
                <SocialFollow />
            </div>
        </FooterContainer>
    );
}

export default Footer;