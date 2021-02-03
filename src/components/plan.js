import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactHtmlParser from 'react-html-parser';
import styled from '@emotion/styled';

const PlanHero = styled( Img )`
    height: 60vh;

    @media( min-width: 414px ) and ( max-width: 768px ){
        height: 50vh;
    }

    @media( min-width: 769px ){
        height: 100vh;
    }
`;

const MainContent = styled.div`
    background-color: #F4DAAA;
    margin-top: -20%;
    padding: 2rem;
    position: relative;
    width: 85%;
    z-index: 99;

    h1{
        font-size: 5rem;
        line-height: normal;
        margin-top: 0;
    }

    @media( min-width: 414px ) and ( max-width: 768px ){
        padding: 6rem;
    }

    @media( min-width: 769px ){
        background-color: transparent;
        display: flex;
        justify-content: flex-end;
        top: 0;
        margin-top: 0;
        padding: 0;
        position: relative;
        width: 100%;
        
        .main-inner{
            background-color: #F4DAAA;
            height: 100vh;
            margin-top: -100vh;
            margin-right: 5%;
            top: 0;
            padding: 8rem 3rem 2rem;
            right: 5%;
            width: 40%;

            h1{
                font-size: 7rem;
                line-height: 7rem;
            }
        }
    }
`;

const Caracteristicas = styled.div`
    padding: 2rem 2rem 5rem;

    h2{
        font-size: 3rem;
        text-align: center;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;

        li{
            margin: 1.5rem 0;
        }
    }

    @media( min-width: 414px ) and ( max-width: 768px ){
        padding: 4rem 8rem 6rem;
    }

    @media( min-width: 769px ){
        padding: 0;
        position: relative;
        
        :after{
            content: '';
            background-color: #F4DAAA;
            height: 100%;
            top: 0;
            position: absolute;
            right: 5%;
            width: 40%;
        }
        
        .caracteristicas-inner{
            padding: 2rem 5rem;
            width: 50%;

            h2{
                font-size: 5rem;
                margin-top: 0;
                text-align: left;
            }
        }
    }
`;

const PrecioPlanContainer = styled.div`
    padding: 1rem;
    position: relative;

    :before{
        content: '';
        background-color: #EDEDED;
        height: 100%;
        top: 0;
        position: absolute;
        right: 0;
        width: 70%;
        z-index: -1;
    }
    
    h2{
        text-align: center;
        font-size: 4rem;

        :before{
            content: '';
            background: radial-gradient(circle at center,rgba( 0,0,0,.3 ) 20%,transparent 22%);
            background-size: 20px 20px;
            height: 156px;
            top: -2.2%;
            position: absolute;
            left: 0;
            width: 153px;
            
        }
    }
    
    .plan-precio-card{
        background-color: #750202;
        margin-bottom: 1rem;
        padding: 2rem;

        h3{
            color: #FFF;
            margin: 0;
            text-align: center;

            strong{
                display: block;
                font-size: 3rem;
                line-height: normal;
            }
        }
        p{
            color: #FFF;
        }

        .precios{
            display: flex;
            flex-flow: row nowrap;

            div{
                padding: 1.5rem 0;
                width: 50%;

                p{
                    font-size: 2rem;
                    margin: 0;
                    text-align: center;
                }

                .titulo{
                    font-size: 1.3rem;
                    font-style: italic;
                    font-weight: 100;
                }
            }
        }

        .btn{
            margin: auto;
        }
    }

    @media( min-width: 414px ) and ( max-width: 768px ){
        h2{
            :before{
                width: 50%;
            }
        }
    }

    @media( min-width: 769px ){
        padding: 1rem 2rem;
        
        :before{
            width: 85%;
        }
        
        h2{
            font-size: 6rem;
            padding-left: 20%;
            text-align: left;
            
            :before{
                display: none;
            }
        }

        .planes-container{
            display: flex;
            flex-flow: row nowrap;
            column-gap: 2rem;

            .plan-precio-card{
                width: 25%;
            }

            .btn:hover{
                background-color: #FF6912;
            }
        }
    }
`;

export const query = graphql`
    query( $id: String ){
        allWordpressWpPlanes(filter: {id: {eq: $id}}) {
            nodes {
                title
                id
                content
                featured_media {
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                post_meta_fields {
                    suitealta
                    suitebaja
                    mastersuitebaja
                    mastersuitealta
                    juniorsuitebaja
                    juniorsuitealta
                    estandarchimeneabaja
                    estandarchimeneaalta
                    caracteristicas
                }
            }
        }
        file(relativePath: {eq: "whatsapp.svg"}) {
            publicURL
        }
    }
`;

const Plan = ({ data }) => {

    console.log( data.allWordpressWpPlanes.nodes[0] )

    const { title, content, featured_media, post_meta_fields } = data.allWordpressWpPlanes.nodes[0];
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
    
    return(
        <Layout>
            <PlanHero 
                fluid={ featured_media.localFile.childImageSharp.fluid }
            />
            <MainContent>
                <div className="main-inner">
                    <h1>{ title }</h1>
                    { ReactHtmlParser( content ) }
                </div>
                
            </MainContent>
            <Caracteristicas>
                <div className="caracteristicas-inner">
                    { ReactHtmlParser( post_meta_fields.caracteristicas ) }
                </div>
            </Caracteristicas>
            <PrecioPlanContainer>
                <h2>Precios</h2>
                <div className="planes-container">
                    <div className="plan-precio-card">
                        <h3>Habitación <strong>Doble con Chimenea</strong></h3>
                        <div className="precios">
                            <div>
                                <p className="titulo">Temporada Baja</p>
                                <p>{ formatMoney( post_meta_fields.estandarchimeneabaja ) }</p>
                            </div>
                            <div>
                                <p className="titulo">Temporada Alta</p>
                                <p>{ formatMoney( post_meta_fields.estandarchimeneaalta ) }</p>
                            </div>
                            
                        </div>
                        <a 
                            href={ `https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20quiero%20reservar%20el%20plan%20${ title }%20en%20la%20habitación%20Doble%20con%20chimenea` } 
                            className="btn"
                        >
                            <img src={ whatsapp } alt="Reservar Doble con Chimenea" />
                            Reservar
                        </a>
                    </div>
                    <div className="plan-precio-card">
                        <h3>Habitación <strong>Junior Suite</strong></h3>
                        <div className="precios">
                            <div>
                                <p className="titulo">Temporada Baja</p>
                                <p>{ formatMoney( post_meta_fields.juniorsuitebaja ) }</p>
                            </div>
                            <div>
                                <p className="titulo">Temporada Alta</p>
                                <p>{ formatMoney( post_meta_fields.juniorsuitealta ) }</p>
                            </div>
                            
                        </div>
                        <a 
                            href={ `https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20quiero%20reservar%20el%20plan%20${ title }%20en%20la%20habitación%20Junior%20Suite` } 
                            className="btn"
                        >
                            <img src={ whatsapp } alt="Reservar Junior Suite" />
                            Reservar
                        </a>
                    </div>
                    <div className="plan-precio-card">
                        <h3>Habitación <strong>Suite</strong></h3>
                        <div className="precios">
                            <div>
                                <p className="titulo">Temporada Baja</p>
                                <p>{ formatMoney( post_meta_fields.suitebaja ) }</p>
                            </div>
                            <div>
                                <p className="titulo">Temporada Alta</p>
                                <p>{ formatMoney( post_meta_fields.suitealta ) }</p>
                            </div>
                            
                        </div>
                        <a 
                            href={ `https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20quiero%20reservar%20el%20plan%20${ title }%20en%20la%20habitación%20Suite` } 
                            className="btn"
                        >
                            <img src={ whatsapp } alt="Reservar Suite" />
                            Reservar
                        </a>
                    </div>
                    <div className="plan-precio-card">
                        <h3>Habitación <strong>Master Suite</strong></h3>
                        <div className="precios">
                            <div>
                                <p className="titulo">Temporada Baja</p>
                                <p>{ formatMoney( post_meta_fields.mastersuitebaja ) }</p>
                            </div>
                            <div>
                                <p className="titulo">Temporada Alta</p>
                                <p>{ formatMoney( post_meta_fields.mastersuitealta ) }</p>
                            </div>
                            
                        </div>
                        <a 
                            href={ `https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20quiero%20reservar%20el%20plan%20${ title }%20en%20la%20habitación%20Master%20Suite` } 
                            className="btn"
                        >
                            <img src={ whatsapp } alt="Reservar Master Suite" />
                            Reservar
                        </a>
                    </div>
                </div>
            </PrecioPlanContainer>
        </Layout>
    );

}

export default Plan;