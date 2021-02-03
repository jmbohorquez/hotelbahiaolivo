import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ListadoHabitaciones = () => {

    const habitaciones = useStaticQuery(
        graphql`
            query{
                allWordpressWpHabitaciones {
                    nodes {
                        id
                        title
                        slug
                        featured_media {
                            localFile {
                                childImageSharp {
                                    fluid( maxWidth: 600 ) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                        post_meta_fields {
                            preciobaja
                        }
                    }
                }
            }
        `
    );
    
    return(
        <div className="inicio-habitaciones-grid">

            { habitaciones.allWordpressWpHabitaciones.nodes.map( habitacion => (
                <div 
                    key={ habitacion.id }
                    className="inicio-habitacion-container"
                >
                    <a 
                        href={ habitacion.slug }
                    >
                        <Img 
                            fluid={ habitacion.featured_media.localFile.childImageSharp.fluid }
                            alt={ habitacion.title }
                        />
                    </a>
                    <h3>
                        <a 
                            href={ habitacion.slug }
                        >
                            { habitacion.title }
                        </a>
                    </h3>
                </div>
            ) ) }
            
        </div>
    );

}

export default ListadoHabitaciones;