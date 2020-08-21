import React from 'react';
import styled from 'styled-components';
import './fonts/font-face.css'

export const Main = () => {
    document.title = 'Essaily';

    const H1 = styled.h1`
        font-family: 'Hauss-Bold-Italic';
        color: #323232;             
        font-size: 40pt;  
    `;
    const H2 = styled.h2`
        font-family: 'Hauss-Book-Italic';
        font-size: 15pt;  
        color: #323232;
        font-weight: 100;
    `;
    const H0 = styled.h1`
        font-family: 'Hauss-Bold-Italic';              
        font-size: 60pt;  
        color: #3A3CBE;
        font-style: bold;
        text-decoration: underline;
    `;


    return (
        <div>
            <H1>An everyday essay.</H1>
            <H2>Dare yourself to write one essay per day.</H2>
            <H2>For a month.</H2>
            <a href = 'new'>
                <H0>Do it.</H0>
            </a>

        </div>
    )
}

export default Main;