import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ListadoHabitaciones from '../components/listHabitaciones';
import BackgroundImage from 'gatsby-background-image';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const HabHeroContainer = styled( BackgroundImage )`
    height: 100vh;
`;
const HabHeroInner = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;

    :after{
        background: #C79898;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 50%;
    }

    .text-wrapper{
        padding: 6rem;
        position: relative;
        z-index: 9;

        h1{
            color: #FFF;
            font-size: 4rem;
        }
        p{
            color: #FFF;

            strong{
                font-size: 2rem;
            }
        }
    }

    @media( min-width: 415px ) and ( max-width: 768px ){
        :after{
            width: 40%;
        }

        .text-wrapper{
            padding: 10rem;

            h1{
                font-size: 6rem;
            }
            p{
                strong{
                    font-size: 2.4rem;
                }
            }
        }
    }

    @media( min-width: 769px ){
        :after{
            display:none;
        }
        
        .text-wrapper{
            background: #C79898;
            height: 100%;
            margin-left: 11%;
            padding: 6rem;
            width: 50%;

            h1{
                font-size: 6rem;
            }
            p{
                strong{
                    font-size: 2.4rem;
                }
            }
        }
    }
`;

const HabitacionesGrid = styled.div`
    margin-top: -18%;
    padding: 0 2rem;
    position: relative;

    :before{
        background: #C79898;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        width: 50%;
    }

    @media( min-width: 415px ) and ( max-width: 768px ){
        margin-top: -35%;
        padding: 0 2rem 4rem;

        :before{
            width: 40%;
        }
    }

    @media( min-width: 769px ){
        :before{
            left: 11%;
        }

        :after{
            content: '';
            background-color:#E6E6E6;
            height: 100%;
            left: 0;
            position: absolute;
            top:0;
            width: 100%;
            z-index: -1;
        }
    }

    .inicio-habitaciones-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 90px 116px 116px;
        column-gap: 1rem;
        padding: 2rem 0;
        row-gap: 1rem;
        position: relative;

        :after{
            background-color: #750202;
            content: '';
            opacity: 0.30;
            position: absolute;
            z-index: -1;
        }

        @media( min-width: 415px ) and ( max-width: 768px ){
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            column-gap: 2rem;
            row-gap: 2rem;
            padding: 2rem;

            :after{
                display: none;
            }
        }

        @media( min-width: 769px ){
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            column-gap: 2rem;
            row-gap: 2rem;
            padding: 2rem;

            :after{
                display: none;
            }
        }

        
    }

    .inicio-habitacion-container{
        background-color: #CCC;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        position: relative;

        .gatsby-image-wrapper{
            height: 100%;
        }

        h3{
            background-color: rgba( 0,0,0,.3 );
            font-size: 1.8rem;
            height: 100%;
            line-height:1;
            margin: 0;
            top: 0;
            position: absolute;
            text-align:center;
            width: 100%;

            a{
                color: #FFF;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
            }
        }

        :first-child{
            grid-column: 1 / 4;

            @media( min-width: 415px ) and ( max-width: 768px ){
                grid-column: 1 / 3;
            }
        }

        @media( min-width: 415px ) and ( max-width: 768px ){
            background-color: #FFF;
            padding: 0;
            
            .gatsby-image-wrapper{
                height: 180px;
            }
            h3{
                background-color: transparent;
                font-size: 3rem;
                position: static;
                height: auto;
                padding: 2rem;
                width: auto;

                a{
                    color: #000;
                    display: block;
                    text-align: left;
                }
            }

        }

        @media( min-width: 769px ){
            background-color: #FFF;
            width: calc( 25% - 2rem );
            padding: 0;
            transition: all .3s ease-in-out;

            :hover{
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                transform: scale( 1.03, 1.03 );
                
                .gatsby-image-wrapper{
                    :after{
                        background-color: #750202;
                    }
                }
            }

            .gatsby-image-wrapper{
                height: 140px;
                overflow: visible !important;

                :after{
                    content: '\u203a';
                    color: #FFF;
                    background-color: #D86523;
                    border-radius: 50%;
                    bottom: -16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 32px;
                    right: 2rem;
                    position: absolute;
                    transition: all .3s ease-in-out;
                    width: 32px;
                    z-index: 99;
                }
            }

            h3{
                background: transparent;
                font-size: 3rem;
                position: static;
                height: auto;
                width: auto;

                a{
                    color: #000;
                    display: block;
                    padding: 2rem;
                    text-align: left;
                }
            }

        }
    }
  
`;

const Habitaciones = () => {

    const { imageMobile, imageDesktop } = useStaticQuery( 
        graphql`
            query{
                imageMobile: file( relativePath: { eq: "habitaciones-hotel-bahia-olivo-hero-movil.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageDesktop: file( relativePath: { eq: "habitaciones-hotel-bahia-olivo-hero.jpg" } ){
                    childImageSharp {
                        fluid( maxWidth: 1440, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    const isMobile = useMediaQuery( { maxWidth: 768 } );

    return(
        <Layout
            sitePageClass = "habitaciones"
        >
            <SEO 
                title="Habitaciones"
            />
            
            <HabHeroContainer
                tag={ 'section' }
                fluid={ isMobile ? imageMobile.childImageSharp.fluid : imageDesktop.childImageSharp.fluid }
                fadeIn="soft"
            >
                <HabHeroInner>
                    <div className="text-wrapper">
                        <h1>Habitaciones</h1>
                        <p><strong>Obtenga la mejor tarifa e incluya el Seguro Hotelero sin costo adicional reservando directamente con el hotel.</strong></p>
                        <p>Las habitaciones y suites de nuestro hotel son amplias, modernas, cómodas y al mejor estilo de los hoteles en Villa de Leyva, enmarcadas por bellos jardines interiores, dando así, un ambiente campestre.</p>
                    </div>
                </HabHeroInner>
            </HabHeroContainer>
            <HabitacionesGrid>
                <ListadoHabitaciones />
            </HabitacionesGrid>
        </Layout>
    );

}

export default Habitaciones;