import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    background-color: #750202;
    display: flex;
    flex-flow: column;
    padding: 2rem;

    .deco-column{
        width: 100%;

        h2, p{
            color: #FFF;
        }

        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            text-transform: uppercase; 
        }
        p{
            font-weight: 100;
        }

        .destacado{
            color: #C4C4C4;
            font-weight: 700;
            margin: 0;
            text-transform: uppercase;
        }
        .precio{
            font-size: 4rem;
            font-weight: 700;
            margin: 0;
        }
        .nota{
            font-size: 1.2rem;
            font-style: italic;
            margin: 0;
        }
    }

    @media( min-width: 768px ){
        flex-flow: row;

        .deco-column:first-of-type{
            padding-left: 3rem;
            padding-right: 1rem;
            width: 40%;

            .gatsby-image-wrapper{
                margin-top: -10%;
                margin-bottom:1rem;
            }
        }

        .deco-column:last-of-type{
            width: 60%;
            padding-left: 4rem;
        }
    }
`;

const Decoracion = () => {

    const { image } = useStaticQuery(
        graphql`
            query{
                image: file( relativePath: { eq: "decoracion-habitaciones.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 510, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );
    
    return(
        <Contenedor>
            <div className="deco-column">
                <Img 
                    fluid={ image.childImageSharp.fluid }
                    alt="Decoración de habitaciones, Hotel Bahía Olivo"
                />
            </div>
            <div className="deco-column">
                <h2>¿Quieres tu habitación con decoración romántica?</h2>
                <p>Solicita que tu habitación sea adornada con el motivo de tu celebración.</p>
                <p><i>Te recibimos con 2 copas de vino y decoramos tu habitación con pétalos, globos y festón.</i></p>
                <div>
                    <p className="destacado">Por tan solo</p>
                    <p className="precio">$60.000 </p>
                    <p className="nota">Adicionales a la tarifa de la habitación.</p>
                </div>
            </div>
        </Contenedor>
    );

}

export default Decoracion;