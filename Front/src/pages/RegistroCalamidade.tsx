import { Box } from "@mui/material";
import Dropdown from "../components/Dropdown/Dropdown";
import InputCalamidade from "../components/Input/InputCalamidade";
import ButtonRegistroCal from "../components/Buttons/ButtonRegistroCal";
import { RadioCheck } from "../components/Input/RadioCheck";

export default function RegistroCalamidade () {
    return (
        <Box sx={{
            height: '100vh',
            width: '90%',
            margin: '45px auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            
        }}>
            <h1 style={{color: '#0E4A67', marginBottom: '25px'}}>Registro de Calamidade</h1>
            <p style={{ marginBottom: '30px'}}>Preencha os dados abaixo para relatar a calamidade</p>
            <Dropdown />
            <InputCalamidade />
            <p style={{
                fontSize: '15px',
                textAlign: 'initial',
                width: '315px',
                alignSelf: 'center',
                margin: '30px'
            }}>
            Este site é destinado a permitir que usuários registrem informações sobre calamidades e desastres para ajudar na comunicação. Todas as informações fornecidas pelos usuários devem ser precisas, verdadeiras e baseadas em fatos.

Informações fraudulentas ou incorretas poderão ser removidas e os usuários responsáveis poderão ser banidos do uso do site e sujeitos a ações legais.

            </p>
            <RadioCheck />
            <ButtonRegistroCal />
        </Box>
    )
}