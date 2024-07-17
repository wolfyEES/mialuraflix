import React from "react";
import styled from "styled-components";

const CardComponent = ({ video, onDelete }) => {
  return (
    <CardContainer>
      <img src={video.imagen} alt={video.titulo} />
      <ButtonContainer>
        <DeleteButton onClick={() => onDelete(video.id)}>Eliminar</DeleteButton>
      </ButtonContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid #333; /* Borde oscuro */
  background-color: #fff; /* Fondo blanco */
  border-radius: 20px 20px 20px 20px;
  img {
    width: 400px;
    cursor: pointer;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
    border-radius: 20px 20px 0px 0px;
    background-position: center;
    
    @media (max-width: 900px){
      width: 300px;
    }
    
    @media (max-width: 660px){
      width: 200px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #f00; /* Fondo rojo */
  border: none;
  color: #fff; /* Texto blanco */
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e00; /* Fondo rojo claro al pasar el mouse */
  }
`;

export default CardComponent;