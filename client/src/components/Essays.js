import React from 'react';
import styled from 'styled-components';
import './fonts/font-face.css'
import Essay from "./Essay";

export const Essays = () => {
    document.title = 'My essays';
    return (
        <div>
            <Essay/>
        </div>
    )
}

export default Essays;