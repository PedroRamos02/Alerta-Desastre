import { Box } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
import { useNavigate } from "react-router-dom";

export default function ButtonCalamidade () {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/registro_calamidade')
    }

    return (
        <Box
            component='button'
            sx={{
                position: "fixed",
                bottom: "36px",
                left: "16px",
                backgroundColor: "#ff9800", 
                color: "#fff",
                width: '230px',
                height: '55px',
                border: 'none',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' 
            }}onClick={handleNavigate}
                type="submit">
                <h3 style={{marginRight: '5px'}}>Relatar calamidade</h3>
                <WarningIcon />
        </Box>
    )
}