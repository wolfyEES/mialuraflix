import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>

      <ContainerHeader>

        <Link to="/">
          <img src="./logo1.png" alt="Logo " />
        </Link>
        <ContainerButtons>
          <Link to="/">

            <ButtonHome>Inicio</ButtonHome>

          </Link>
          <Link to="/NewVideo">

            <ButtonAddVideo>Agregar Video</ButtonAddVideo>

          </Link>
          <Link to="/Perfil">

            <ButtonProfile>Mi Perfil</ButtonProfile>

          </Link>

        </ContainerButtons>
      </ContainerHeader>
    </HeaderStyle>

  );
};

const HeaderStyle = styled.header`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: center;
  background-color: #3498db; /* Azul claro */
  border-bottom: 2px solid #f1c40f; /* Naranja claro */
  z-index: 1;
  width: 100%;
`

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  width: 1400px;
  padding: 0 50px;
  img {
    width: 170px;
    filter: invert(75%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  
  @media (max-width: 660px){
    width: 100%;
    justify-content: center;
  }
`

const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  button{
    padding: 10px 20px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 20px; /* Redondeado */
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra */
  }

  
  @media (max-width: 660px){
    display: none;
  }
`

const ButtonHome = styled.button`
  color: #fff; /* Blanco */
  border: none;
  border-radius: 20px;
  background-color: #2ecc71; /* Verde claro */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #1abc9c; /* Verde oscuro */
    color: #fff;
  }
`

const ButtonAddVideo = styled.button`
  color: #fff; /* Blanco */
  border: none;
  border-radius: 20px;
  background-color: #9b59b6; /* Morado claro */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #8e44ad; /* Morado oscuro */
    color: #fff;
  }
`

const ButtonProfile = styled.button`
  color: #fff; /* Blanco */
  border: none;
  border-radius: 20px;
  background-color: #e74c3c; /* Rojo claro */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #c0392b; /* Rojo oscuro */
    color: #fff;
  }
`

export default Header;