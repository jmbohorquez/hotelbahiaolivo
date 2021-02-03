import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

export const ElHotel = styled.section`
    background-color: rgba( 188, 147, 123, .38 );
    padding-bottom: 80px;
    position: relative;

    .inner-container{

        h2{
            font-size: 5rem;
            text-align:center;
        }

        .text-limiter{
            overflow: hidden;
            position: relative;
            transition: all .3s ease-in-out;

            &.cerrado{
                height: 55vh;
            }
            &.abierto{
                height: auto;
            }
        }
    }

    .link-read-more{
        padding: 1rem;
        position: relative;
        z-index: 9;
        
        a{
            color: #FFF;
            display: block;
            letter-spacing: 2px;
            text-align: center;
            text-transform: uppercase;
        }
    }

    :after{
        background: rgb(188,147,123);
        background: linear-gradient(180deg, rgba(188,147,123,0) 5%, rgba(188,147,123,1) 59%);
        bottom: 0;
        content: '';
        height: 250px;
        position: absolute;
        width: 100%;
    }

    @media( min-width:415px ) and (max-width: 768px ){
        :after{
            display: none;
        }

        .inner-container{

            .text-limiter{

                &.cerrado{
                    height: auto;
                }
    
            }
        }
    }
    @media( min-width: 769px ){
        display: flex;
        flex-flow: row nowrap;
        padding-bottom: 0;
        position: relative;
        z-index: 0;

        :after{
            display: none;
        }

        .inner-container{
            padding-left: 4rem;
            padding-right: 4rem;
            position: relative;
            padding-bottom: 32px; 
            
            :before{
                content: '';
                background: radial-gradient(circle at center,rgba( 0,0,0,.3 ) 20%,transparent 22%);
                background-size: 20px 20px;
                height: 200px;
                margin-left: -3rem;
                opacity: .5;
                position: absolute;
                width: 200px;
            }
            
            .text-limiter{

                h2{
                    margin-top: 10rem;
                    margin-bottom: 2rem;
                    text-align: left;
                }

                &.cerrado{
                    height: auto;
                }

            }
        }

        .inner-container{
            width: 55%;
        }

        .inicio-hotel-imagen-container{
            width: 45%;
        }
    }

`;

export const ContactoContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: absolute;
    bottom: 1.5rem;
    width: 128px;
    left: 0;
    right: 0;
    margin: auto;
    z-index:9;

    a{
        align-items:center;
        background-color: #FFF;
        border-radius:50%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: flex;
        justify-content:center;
        height: 48px;
        width: 48px;

        img{
            height: 22px;
            width: auto;
        }
    }

    @media( min-width: 769px ){
        margin: 0;
        padding-top: 2rem;
        position: static;
    }
`;

export const LasHabitaciones = styled.section`
    position: relative;

    @media( max-width: 768px ){
        padding: 2rem 1rem;

        :before{
            content: '';
            background: radial-gradient(circle at center, rgba( 0, 0, 0, .3 ) 20%, transparent 22%); 
            background-size: 20px 20px;
            height: 200px;
            opacity: .3;
            position: absolute;
            top: 3rem;
            right: 0;
            width: 40%;
        }
    }

    @media( min-width: 769px ){
        padding-top: 5rem;
    }

    .inner-container{
        position: relative;
        z-index: 9;

        
        @media( max-width: 768px ){
            h2{
                font-size: 3.5rem; 
                text-align:center;
            }
            p{
                text-align: center;
            }
        }

        @media( min-width: 769px ){
            margin-left: 10%;
            width: 65%;
            
            h2{
                font-size: 4.5rem;
                margin-bottom: 1rem; 
                text-align: left
            }
            p{
                text-align: left;
            }
        }
    }


    .inicio-habitaciones-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 90px 116px 116px;
        column-gap: 1rem;
        margin-top: 2rem;
        padding: 3rem 0;
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
                height: 100%;
                left: 0;
                margin: auto;
                right: 0;
                top: 0;
                width: 75%;
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
                height: 60%;
                bottom: 0;
                margin: auto;
                right: 0;
                top: 0;
                width: 100%;
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
            transition: all .3s ease-in-out;
            padding: 0;

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

export const Spa = styled.section`

    h2{
        margin: 0;
    }
    p{
        font-weight: 100;
        margin-top: 0;
    }

    .gatsby-image-wrapper{
        height: 100%;
    }

    @media( max-width: 768px ){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        min-height: 224px;
        padding-top: 3rem;

        h2{
            font-size: 3rem;
        }
    }

    @media( min-width: 769px ){
        display: flex;
        flex-flow: row nowrap;
        padding: 4rem 2rem;
        position: relative;

        :after{
            content: '';
            background-color: #F2DABD;
            bottom: 0;
            height: 80%;
            left: 0;
            position: absolute;
            width: 80%;
            z-index: -1;
        }

        .image-container{
            width: 50%;
        }
        .text-container{
            width: 50%;
        }

        .titulo-wrapper{
            background: #FFF;
            padding: 2rem;
            margin-left: -50%;
            position: relative;
            margin-top: 5rem;

            h2{
                font-size: 6rem;
            }

            p{
                font-size: 2rem;
            }
        }

        .contenido-wrapper{
            padding-left: 6rem;
            padding-top: 3rem;

            p{
                font-size: 2rem;
            }
        }
    }

`;

export const RestauranteWrapper = styled.div`
    width: 100%;

    @media( min-width: 769px ){
        padding-bottom: 5rem;
        padding-top: 2rem;
        position: relative;

        :after{
            background-color: #994B1D;
            bottom: 0;
            content: '';
            height: 80%;
            opacity: .82;
            position: absolute;
            right: 0;
            width: 50%;
            z-index: -1;
        }
    }
`;

export const Restaurante = styled(BackgroundImage)`
    margin-top: 4rem;

    @media( max-width: 768px ){
        width: 100%;

        .inner-backgroun-image{
            display: flex;
            align-items: flex-end;
            height: 50vh;
            position: relative;
            width: 65%;

            :before{
                background: #FFF;
                content: '';
                height: 100%;
                position: absolute;
                top: 0;
                width: 40%;
            }

            .text-wrapper{
                background: #FFF;
                padding: 2rem;
                position: relative;
                z-index: 9;

                h2{
                    margin:0;
                    font-size: 2.8rem;
                }
                p{
                    font-size: 1.2rem;
                    font-weight: 100;
                }

                .btn{
                    font-size: 10px;
                }
            }
        }
    }
    
    @media( min-width: 769px ){
        height: 70vh;
        width: 80%;

        .inner-backgroun-image{
            background-color: #FFF;
            height: 100%;
            width: 50%;

            .text-wrapper{
                display: flex;
                flex-flow: column;
                align-items: flex-end;
                top: 8rem;
                padding: 4rem;
                position: absolute;
                width: 50%;

                h2{
                    background-color: #FFF;
                    font-size: 8rem;
                    margin: 0;
                    margin-right: -40%;
                    padding: 2rem;
                    text-align: right;
                }
                p{
                    font-size: 2rem;
                    text-align: right;
                }
            }
        }
    }
`;

export const Ubicacion = styled.section`
    position: relative;

    :before{
        background: radial-gradient(circle at center, rgba( 255, 255, 255, .3 ) 20%, transparent 22%); 
        background-size: 20px 20px;
        content: '';
        height: 60%;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
    }

    :after{
        background-color: #CAA28A;
        bottom: 0;
        content: '';
        height: 60%;
        position: absolute;
        width: 100%;
        z-index: -1;
    }

    iframe{
        display:block;
        margin: 0 auto;
        position: relative;
        width: 90%
    }
    
    @media( max-width: 768px ){
        padding: 3rem 0;
        
        iframe{
            height: 300px;
        }

        .text-wrapper{
            padding: 0 3rem;
            width: 80%;

            h2{
                color: #FFF;
                font-size: 3rem;
            }
            p{
                color: #FFF;
            }
        }
    }
    
    @media( min-width: 769px ){
        padding: 6rem 0;
        
        iframe{
            height: 480px;
        }

        .text-wrapper{
            padding: 0 3rem 0 16rem;
            width: 80%;

            h2{
                color: #FFF;
                font-size: 5rem;
            }
            p{
                color: #FFF;
                font-size: 2rem;
            }
        }
    }

    
`; 