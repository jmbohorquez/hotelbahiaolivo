import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-background-image';
import ReactHtmlParser from 'react-html-parser';
import ImgsViewer from 'react-images-viewer';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Decoracion from '../components/decoracionHabitaciones';

const HabitacionHero = styled( Img )`
    height: 80vh;
`;

const BodyText = styled.div`
    
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    
    padding: 0 1rem;
    position: relative;

    :after{
        background-color: #E6E6E6;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }

    @media ( min-width: 414px ) and ( max-width: 768px ){

    }

    @media( min-width: 769px ){
        padding: 0 4rem;
        display: block;
    }
`;

const CopyContainer = styled.div`
    grid-row: 1 / 2;
    background-color: #C79898;
    margin-top: -15%;
    padding: 4rem 4rem;
    width: 100%;

    h1{
        color: #FFF;
        font-size: 5rem;
        line-height: normal;
        margin: 0;
        
    }

    p{
        color: #FFF;
        
    }

    @media ( min-width: 414px ) and ( max-width: 768px ){
        left: 0;
        margin: auto;
        margin-top: -25%;
        padding: 4rem 6rem;
        right: 0;
        width: 70%;

        h1{
            width: 100%;
        }
        p{
            width: 100%;
        }
    }
    @media( min-width: 769px ){
        padding: 4rem 0 4rem 6rem;
        width: 90%;

        h1{
            width: 50%;
        }
        p{
            width: 50%;
        }
    }
`;

const HabPrecios = styled.div`
    grid-row: 3 / 4;
    position: relative;
    width: 100%;

    .text-wrapper{
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        padding: 2rem;
        width: 100%;
        

        p{
            text-align: right;
        }

        .precio-titulo{
            color: #777777;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0;
            text-transform: uppercase;
        }
        .precio-costo{
            margin: 0;
            font-size: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
        .precio-nota{
            color: red;
            font-style: italic;
            margin: 0;
        }
        .precio-descripcion{
            font-size: 1.5rem;
            font-style: italic;
            margin-top: 0;
            margin-bottom: 2rem;
        }

        .promo-hab{
            font-size: 1.8rem;
            font-weight: bold;
            text-align: right;
        }

        .reglas{
            font-size: 1.5rem;
            font-style: italic;
            margin-top: 1rem;
        }
    }

    @media ( min-width: 414px ) and ( max-width: 768px ){
        
        .text-wrapper{
            padding: 4rem 10rem 4rem 16rem;
            position: relative;
            width: 90%;
            z-index: 9;
        }
    }
    @media( min-width: 769px ){
        width: 90%;

        :after{
            content: '';
            background: #C79898;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            width: 50%;
        }

        .text-wrapper{
            padding: 4rem 8rem;
            width: 50%;
        }
    }
`;

const GaleriaFotos = styled.div`
    grid-row: 2 / 3;
    padding: 0 2rem;
    position: relative;

    :after{
        background-color: #C79898;
        content: '';
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    @media ( min-width: 414px ) and ( max-width: 768px ){
        padding: 0 2rem 4rem;

        :after{
            width: 70%;  
        }

    }


    @media( min-width: 769px ){
        padding: 50px 2rem 4rem;
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;

        :before{
            background-color:#E6E6E6;
            content: '';
            height: calc( 100% - 120px );
            left: 0;
            bottom: 0;
            position:absolute;
            width: 100%;
            z-index: -1;
        }

        :after{
            display: none;
        }

        .gallery-wrapper{
            padding-bottom: 0;
        }
    }
    
    .gallery-wrapper{
        display: flex;
        flex-flow: row wrap;

        column-gap: 2rem;
        row-gap: 2rem;
        padding-bottom: 4rem;
        position: relative;
        z-index: 9;
        

        a{
            display: block;
            line-height: 0;
            height: 100px;
            overflow: hidden;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            width: calc( 50% - 1rem );

            @media( min-width: 414px ) and ( max-width: 768px ){
                height: 180px;
            }
            @media( min-width: 769px ){
                height: 180px;
                width: calc( 50% - 2rem );
            }

            img{
                height: 100%;
                object-fit: cover;
                width: 100%;
            }
        }
    }
`;

export const query = graphql`
    query($id: String){
        allWordpressWpHabitaciones(filter: {id: {eq: $id }}) {
            nodes {
                title
                content
                id
                wordpress_id
                post_meta_fields {
                    precioalta
                    preciobaja
                    vdw_gallery_id
                }
                slug
                featured_media {
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
        file(relativePath: {eq: "whatsapp.svg"}) {
            publicURL
        }
    }
`;

const Habitacion = ({ data }) => {

    const [ isVisible, setIsVisible ] = useState( false );
    const [ slide, setSlide ] = useState( 0 ); 

    const { featured_media, post_meta_fields, title, content, slug } = data.allWordpressWpHabitaciones.nodes[0];
    const whatsapp = data.file.publicURL;
    
    function formatMoney( amount, decimalCount = 0, decimal = ".", thousands = "." ) {
        try {
          
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      
            const negativeSign = amount < 0 ? "-" : "";
      
            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;
      
            return '$' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        
        } catch (e) {
          console.log(e)
        }
    };

    const images = [];

    post_meta_fields.vdw_gallery_id.map( srcs => (
        images.push( { src: srcs } )
    ) );

    const showSlide = index => {
        setIsVisible( true );
        setSlide( index );
    }

    const gotoPrevious = () => {
        if( slide > 0 ){
            setSlide( slide - 1 );
        }
    }
    const gotoNext = () => {
        if( slide < images.length ){
            setSlide( slide + 1 );
        }
    }

    const closeViewer = () => {
        setIsVisible( false );
        setSlide( 0 );
    }
    
    return(
        <Layout
            sitePageClass = { title }
        >
            <SEO 
                title={ title } 
            />
            
            <HabitacionHero 
                fluid={ featured_media.localFile.childImageSharp.fluid }
            />
            <BodyText>
                <CopyContainer>
                    <h1>{ title }</h1>
                    { ReactHtmlParser( content ) }
                </CopyContainer>
                <HabPrecios>
                    <div className="text-wrapper">
                        <p>Las tarifas incluyen desayuno, parqueadero, sauna o turco en nuestro Nature Spa (con previa reserva en recepción).</p>
                        <div className="precio-hab">
                            <p className="precio-titulo">Temporada Baja</p>
                            <p className="precio-costo">{ formatMoney( post_meta_fields.preciobaja ) } / Noche</p>
                            <p className="precio-nota">Precios válidos hasta 31 de diciembre de 2021</p>
                            { ( slug === 'habitacion-doble-estandar-con-chimenea' || slug === 'junior-suite' || slug === 'master-suite' || slug === 'suite' ) && <p className="precio-descripcion">Costo por 2 personas.</p> }
                            
                        </div>
                        <div className="precio-hab">
                            <p className="precio-titulo">Temporada Alta</p>
                            <p className="precio-costo">{ formatMoney( post_meta_fields.precioalta ) } / Noche</p>
                            <p className="precio-nota">Precios válidos hasta 31 de diciembre de 2021</p>
                            { ( slug === 'habitacion-doble-estandar-con-chimenea' || slug === 'junior-suite' || slug === 'master-suite' || slug === 'suite' ) && <p className="precio-descripcion">Costo por 2 personas.</p> }
                        </div>
                        <div className="promo-hab">
                            Tenemos tarifas especiales por noche de lunes a jueves no festivos. Pregunta por ellas haciendo click en nuestro botón de reserva. 
                        </div>
                        <a 
                            href={ `https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20quiero%20reservar%20la%20habitación%20${ title }` } 
                            className="btn"
                        >
                            <img src={ whatsapp } alt="Whatsapp Hotel Bahía Olivo, Villa de Leyva" />
                            Reservar
                        </a>
                        <p className="reglas">Check In: 3:00 pm - Check Out: 1:00 pm <br /> 
                        Aplican tarifas de temporada alta los fines de semana festivos, Semana Santa y del 26 de diciembre al 11 de enero.</p>
                    </div>
                </HabPrecios>
                <GaleriaFotos>
                    <div className="gallery-wrapper">

                        { post_meta_fields.vdw_gallery_id.map( ( imgUrl, index ) => (
                            <a
                                href="#!"
                                key={ index }
                                onClick={ () =>  showSlide( index ) }
                            >
                                <img src={ imgUrl } alt={`Galeria ${ title }`} />
                            </a>
                        ) ) }
                        
                        <ImgsViewer
                            imgs = { images }
                            currImg = { slide }
                            isOpen = { isVisible }
                            onClickPrev={ gotoPrevious }
                            onClickNext={ gotoNext }
                            onClose={ closeViewer }
                        />
                    </div>
                </GaleriaFotos>
            </BodyText>
            { ( slug === 'habitacion-doble-estandar-con-chimenea' || slug === 'junior-suite' || slug === 'master-suite' || slug === 'suite' ) && <Decoracion /> }
        </Layout>
    );

}

export default Habitacion;