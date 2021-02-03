import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const Tour = styled.iframe`
    border: none;
    height: 100%;
    width: 100%;
`;

const TourVirtual = () => {

    return(
        <Layout>
            <Tour
                src="https://guia360.com.co/files/galerias/761hotelbahiaolivo/index.html"
                frameborder = "0"
                allowfullscreen
            ></Tour>
        </Layout>
    );

}

export default TourVirtual;