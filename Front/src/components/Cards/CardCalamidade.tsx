import React, { useState } from 'react';
import { Box, keyframes, styled } from "@mui/material";

interface CardCalamidadeProps {
  bairroInfo: string;
  ocorrenciaInfo: string;
  statusOcorrencia: string;
}

export const CardCalamidade: React.FC<CardCalamidadeProps> = ({ bairroInfo, ocorrenciaInfo }) => {
  // Estados para o texto de ocorrencia e a cor do círculo pulsante
  const [currentOcorrenciaInfo, setOcorrenciaInfo] = useState(ocorrenciaInfo);
  const [circleColor, setCircleColor] = useState('#4caf50'); // Cor inicial: verde

  // Função para atualizar o texto e a cor do círculo após o cadastro de calamidade
  const handleCadastroClick = () => {
    setOcorrenciaInfo('Nova ocorrência registrada!'); // Atualiza o texto da ocorrência
    setCircleColor('#f44336'); // Atualiza a cor do círculo para vermelho
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
    backgroundColor: circleColor, // Cor dinâmica baseada no estado
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
      {/* Botão de Cadastro de Calamidade */}
      <button onClick={handleCadastroClick}>Cadastrar Calamidade</button>
    </Box>
  );
};

export default CardCalamidade;
