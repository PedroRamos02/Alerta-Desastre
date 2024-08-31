import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ButtonCadastro () {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/home')
    }

    return (
        <Box
            component='button'
            sx={{
                width: '300px',
                height: '55px',
                backgroundColor: '#ff9800',
                borderRadius: '15px',
                border: 'none',
                marginTop: '20px',
                fontSize: '25px',
                color: 'white'
            }}
            onClick={handleNavigate}
            type="submit"
            >
            Cadastrar
        </Box>
    )
}