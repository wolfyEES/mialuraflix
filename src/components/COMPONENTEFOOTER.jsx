import React from "react";
import styled from "styled-components";

function FooterComponent() {
    return (
        <FooterContainer>
            <img src="./logo1.png" alt="Alura Logo" />
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 40px;
    background-color: #3498db; /* Azul claro */
    border-top: 2px solid #f1c40f; /* Naranja claro */
    > img {
        width: 170px;
        filter: sepia(50%) saturate(150%) hue-rotate(30deg);
    }
`

export default FooterComponent;