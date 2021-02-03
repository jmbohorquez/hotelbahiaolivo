import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalClass(){
    
    return(
        <Global 
            styles={ css`
                html{
                    font-size: 62.5%;
                    box-sizing: border-box;
                    scroll-behavior: smooth;
                }
                *, *:after, *:before{
                    box-sizing: border-box;
                }
                body{
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.6rem;
                    line-height: 1.5;
                }
                h1, h2, h3{
                    font-family: 'Cormorant Garamond', serif;
                }
                figure{
                    margin: 0;
                    padding: 0;
                }
                img{
                    max-width: 100%;
                }
                a{
                    color: #E85805;
                    text-decoration: none;
                }
                .site-structure{
                    display: grid;
                    @media( max-width:768px ){
                        grid-template-rows: 64px auto auto;
                        grid-template-columns: 100%;
                    }

                    @media( min-width: 769px ){
                        grid-template-columns: 184px 1fr;
                        grid-template-rows: auto auto;
                    }
                }
                .header{
                    background-color: #E85805;
                    box-sizing:border-box;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    padding: 1rem;
                    
                    

                    @media( min-width: 769px ){
                        flex-flow: column;
                        height: 100vh;
                        grid-column: 1 / 2;
                        grid-row: 1 / 2;

                        position: sticky;
                        padding: 3rem;
                        top: 0;
                    }

                    figure{
                        width: 100px;

                        @media( min-width: 769px ){
                            width: 100%;
                        }
                        
                        img{
                            height: 100%;
                        }

                    }

                    .header-bar-nav-mobile{
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                    }

                    .header-nav-links{
                        margin: 0;
                        padding: 0;
                        
                        
                        list-style: none;
                        width: 100%;
                        
                        transition: all .3s ease-in-out;

                        @media( max-width: 768px ){
                            align-items: center;
                            background-color: #E85805;
                            bottom: 0;
                            display: flex;
                            flex-flow: column;
                            justify-content: center;
                            position: absolute;
                            height: calc( 100vh - 64px );
                            z-index: 9999;
                            
                            
                            &.ocultar{
                                opacity: 0;
                                left: -100%
                            }

                            &.mostrar{
                                opacity: 1;
                                left: 0;
                            }

                        }
                        @media( min-width: 769px ){
                            
                        }
                    }

                    .header-link{

                        a{
                            color: #FFF;
                            font-weight: 100;
                            text-transform: uppercase;
                        }

                        @media( max-width: 768px ){
                            padding: 1rem 0;
                            
                            a{
                                font-size: 2rem;
                            }
                        }

                        @media( min-width: 769px ){
                            padding: 0.5rem 0;
                            
                            a{
                                font-size: 1.5rem;
                            }
                        }
                        
                        
                    }

                }
                .burger-button-container{
                    align-items: center;
                    background-color: transparent;
                    border: none;
                    box-sizing: border-box;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    height: 32px;
                    padding: 0;
                    width: 32px;
                    appearance: none;
                    -webkit-appearance: none;

                    @media( min-width: 769px ){
                        display: none;
                    }

                    .burger-button-line{
                        background-color: #FFF;
                        height: 4px;
                        margin-bottom: 3px;
                        width: 100%;
                        transition: all .3s ease-in-out;

                        &:last-of-type{
                            margin-bottom: 0;
                        }
                    }

                    @media( max-width: 768px ){

                        &.cerrar{
                            .line-1{
                                position:relative;
                                top: 3px;
                                transform: rotate(45deg);

                            }
                            .line-2{
                                display: none;
                            }
                            .line-3{
                                position:relative;
                                bottom: 3px;
                                transform: rotate(-45deg);
                            }
                        }
                        &.abrir{
                            
                        }

                    }
                }

                .body-content{
                    @media( min-width: 769px ){
                        grid-column: 2 / 3;
                        grid-row: 1 / 2;
                    }
                }

                .btn{
                    align-items: center;
                    background-color:#E85805;
                    border-radius: 30px;
                    color: #FFF;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    font-weight: 100;
                    margin-top: 1rem;
                    letter-spacing: 2px;
                    padding: 0.5rem 2rem;
                    position: relative;
                    text-transform: uppercase;
                    transition: all .3s ease-in-out;
                    width: fit-content;

                    img{
                        height: 18px;
                        margin-right: 8px;
                        width: auto;
                    }

                    @media( max-width: 768px ){
                        font-size: 12px;
                    }
                    @media( min-width: 769px ){
                        font-size: 1.8rem;
                        padding: 1rem 3rem;
                    }

                    :hover{
                        background-color: #750202;
                    }
                }

                .inner-container{
                    margin: auto;
                    width: 75%;
                }

                .politicas-condiciones{
                    padding: 0 4rem 2rem;

                    h1{
                        text-align: center;
                    }
                }

            ` }
        />
    )

}