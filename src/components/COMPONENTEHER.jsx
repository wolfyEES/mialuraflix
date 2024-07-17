import React from 'react';
import styled from 'styled-components';

const HeroComponent = ({ video }) => {
    return (
        <HeroContainer>
            {video ? (
                <HeroContent>
                    <iframe src={video.video} title={video.titulo} frameBorder="0" allowFullScreen></iframe>
                    <TextContainer>
                        <Category>{video.categoria}</Category>
                        <Title>{video.titulo}</Title>
                        <Description>{video.descripcion}</Description>
                    </TextContainer>
                </HeroContent>
            ) : (
                <p>Selecciona un video para verlo aquí</p>
            )}
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
    text-align: center;
    margin-top: 127px;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow-x: hidden;
    height: 850px;
    background-image: url('/Fondo.png'); // Ruta directa a la imagen en la carpeta public
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow-y: hidden;
    align-items: center;
    justify-content: center;
    iframe {
        width: 50%;
        aspect-ratio: 16/9;
    }
    @media (max-width: 1500px){
        iframe {
            width: 80%;
        }
    }

    @media (max-width: 900px){
        height: 700px;
    }

    @media (max-width: 660px){
        height: 600px;
    }
`

const HeroContent = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 1400px;
    @media (max-width: 1500px){
        flex-direction: column-reverse;
        align-items: center;
        max-width: 800px;
        gap: 40px;
    }
`

const TextContainer = styled.div`
    max-width: 600px;
    color: #f1c40f; /* Naranja claro */
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 900px){
        padding: 0 20px;
    }
`

const Category = styled.p`
    padding: 20px 40px;
    width: fit-content;
    border-radius: 20px;
    font-size: 48px;
    font-weight: bold;
    background-color: #3498db; /* Azul claro */
    color: white; /* Blanco */
    @media (max-width: 900px){
        font-size: 24px;
    }
`

const Title = styled.h1`
    font-size: 65px;
    text-align: start;
    color: white; /* Blanco */
    @media (max-width: 900px){
        font-size: 23px;
    }
`

const Description = styled.p`
    text-align: start;
    font-size: 18px;
    font-weight: normal;
    color: white; /* Blanco */
    @media (max-width: 900px){
        font-size: 12px;
    }
`

export default HeroComponent;