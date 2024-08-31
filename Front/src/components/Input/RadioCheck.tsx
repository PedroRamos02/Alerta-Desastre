import React, { useState } from 'react';
import { Radio, FormControlLabel } from '@mui/material';

export const RadioCheck: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean>(false); // Estado para gerenciar a aceitação

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(event.target.checked); // Atualiza o estado com base na seleção do usuário
  };

  return (
      <FormControlLabel style={{
        margin: '0',
        alignSelf: 'center'
      }}
        control={
          <Radio
            checked={accepted}
            onChange={handleChange}
            value="accepted"
            color="primary"
          />
        }
        label="Eu aceito os termos e condições"
      />
  );
};


