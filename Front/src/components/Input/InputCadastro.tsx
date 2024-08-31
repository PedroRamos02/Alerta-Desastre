import { Box, TextField } from "@mui/material";

interface InputCastroConfig {
    labelText: string;
}

export const InputCadastro: React.FC<InputCastroConfig> = ({ labelText }) => {
    return (
        <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '34ch' } }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
                id="outlined-multiline-flexible"
                label={labelText}
                multiline
                maxRows={4}
            />
        </div>
    </Box>
  )
}
        