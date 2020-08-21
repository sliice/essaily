import book_italic from "./als_hauss-book_italic-webfont.ttf";
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
        @font-face {
        font-family: 'Hauss-Book-Italic';
        src: local('Hauss-Book-Italic'),
        url(${book_italic}) format('truetype');
    }
    `;