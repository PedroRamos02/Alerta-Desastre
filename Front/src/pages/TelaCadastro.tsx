import { Box } from "@mui/material";
import { InputCadastro } from "../components/Input/InputCadastro";
import UploadButton from "../components/Buttons/UploadButton";
import ButtonCadastro from "../components/Buttons/ButtonCadastrar";

export default function TelaCadastro () {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            width: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '3em',
        }}>
            <h2 style={{
                color: '#0E4A67',
                margin: '15px auto 30px auto',
                fontSize: '25px'
            }}>Preencha com seus dados</h2>
            <InputCadastro 
                labelType="text"
                inputType="text"
                labelText="Nome"
                placeholderText="Insira seu nome"

            />
            <InputCadastro 
                labelType="text"
                inputType="text"
                labelText="Email"
                placeholderText="Insira seu Email"

            />
            <InputCadastro 
                labelType="password"
                inputType="password"
                labelText="Senha"
                placeholderText="Insira sua senha"

            />
            <InputCadastro 
                labelType="number"
                inputType="number"
                labelText="CPF"
                placeholderText="Insira seu CPF"

            />
            <InputCadastro 
                labelType="text"
                inputType="text"
                labelText="Localização"
                placeholderText="Informe sua localização"

            />
            <UploadButton />
            <ButtonCadastro />
        </Box>
    )
}