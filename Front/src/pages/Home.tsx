import { Box } from "@mui/material";
import ButtonCalamidade from "../components/Buttons/ButtonCalamidade";
import { CardCalamidade } from "../components/Cards/CardCalamidade";

export default function Home () {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            padding: '15px 0'
        }}>
            <CardCalamidade 
                bairroInfo="Vila Nova"
                ocorrenciaInfo="Sem ocorrencias registradas"
            />
            <ButtonCalamidade />
        </Box>
    )
}