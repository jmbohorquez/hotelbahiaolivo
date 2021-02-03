/**@jsx jsx*/
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Imagen = styled(Img)`
    position: static;
`;

const BotonesHero = () => {

    const { habitacionesHero, planesHero } = useStaticQuery(
        graphql`
            query{
                habitacionesHero: file( relativePath: { eq: "inicio-habitaciones-boton.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 376) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                planesHero: file( relativePath: { eq: "inicio-planes-boton.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 376) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    const isDesktop = useMediaQuery( { minWidth: 769 } );
    
    return(
        <div className="botones-hab-planes">
            <div 
                className="botones-hab-planes-card"
                css={
                    isDesktop && (
                    
                        css`
                            transition: all .3s ease-in-out;

                            :hover{
                                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                                transform: scale( 1.03, 1.03 );
                            }
                        `
                    )
                }
            >
                <Link to="/habitaciones">
                    <Imagen 
                        fixed={ habitacionesHero.childImageSharp.fluid }
                        placeholderClassName={css`
                            position: static;
                        `}
                        loading="lazy"
                        alt="Habitaciones Hotel Bahía Olivo Villa de Leyva"
                    />
                </Link>
                <h2>
                    <Link to="/habitaciones">
                        Habitaciones
                    </Link>
                </h2>
            </div>
            <div 
                className="botones-hab-planes-card"
                css={
                    isDesktop && (
                    
                        css`
                            transition: all .3s ease-in-out;

                            :hover{
                                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                                transform: scale( 1.03, 1.03 );
                            }
                        `
                    )
                }
            >
                <Link to="/planes">
                    <Imagen
                        fixed={ planesHero.childImageSharp.fluid }
                        loading="lazy"
                        style=""
                        imgStyle={""}
                        alt="Habitaciones Hotel Bahía Olivo Villa de Leyva"
                    />
                </Link>
                <h2>
                    <Link to="/planes">
                        Planes
                    </Link>
                </h2>
            </div>
        </div>
    )

}

export default BotonesHero;