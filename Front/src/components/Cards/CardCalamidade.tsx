import React, { useState } from 'react';
import { Box, keyframes, styled } from "@mui/material";

interface CardCalamidadeProps {
  bairroInfo: string;
  ocorrenciaInfo: string;
  statusOcorrencia: string;
}

export const CardCalamidade: React.FC<CardCalamidadeProps> = ({ bairroInfo, ocorrenciaInfo }) => {
 
  const [currentOcorrenciaInfo, setOcorrenciaInfo] = useState(ocorrenciaInfo);
  const [circleColor, setCircleColor] = useState('#4caf50'); 

  const handleCadastroClick = () => {
    setOcorrenciaInfo('1 ocorrência registrada!'); 
    setCircleColor('#f44336'); 
  };

  const pulseAnimation = keyframes`
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  `;

  const PulsingCircle = styled(Box)({
    width: "30px",
    height: "30px",
    backgroundColor: circleColor, 
    borderRadius: "50%",
    animation: `${pulseAnimation} 1.5s infinite`,
  });

  return (
    <Box sx={{
      width: '90%',
      height: '90px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      borderRadius: '15px',
      boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      padding: '10px 25px',
      justifyContent: 'center'
    }}>
      <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between' }}>
        <h3>{bairroInfo}</h3>
        <PulsingCircle />
      </Box>
      <p>{currentOcorrenciaInfo}</p>
      <button style={{opacity: 0, width: '300px', height: '80px', position: 'absolute', }} onClick={handleCadastroClick}>Cadastrar Calamidade</button>
    </Box>
  );
};

export default CardCalamidade;
