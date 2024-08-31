import { Box } from "@mui/material";
import { InputLogin } from "../components/Input/InputLgin";
import ButtonLogin from "../components/Buttons/ButtonLogin";

export default function TelaLogin () {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '3em',
            background: 'linear-gradient(135deg, #f39c56, #f9d976)'
        }}>
                <Box
                    component="img"
                    src="../src/assets/logo.png"
                    sx={{  width: '300px', margin:'40px auto', position: 'relative', bottom: '50px', display: { xs: 'block', md: 'none' },}} >
                </Box>
                <Box
                    component="label"
                    sx={{  
                        display: { xs: 'none', sm: 'block' },
                        color: 'white',
                        position: 'relative', right: '150px'
                        }} >
                    Email
                </Box>
                <InputLogin
                    labelType=""
                    inputType="text"
                    placeholderText="  Email"
                    largura="330"
                    spaceBottom="10"
                />
                <Box
                    component="label"
                    sx={{  
                        display: { xs: 'none', sm: 'block' },
                        color: 'white',
                        marginTop: '10px',
                        position: 'relative', right: '135px'
                        }} >
                    Senha
                </Box>
                <InputLogin
                    labelType=""
                    inputType="password"
                    placeholderText="   Password"
                    largura="330"
                    spaceBottom="75"
                />
                <ButtonLogin />
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    width: '100%',
                    margin: '50px 0 30px 0',
                    padding: '0 2em'
                }} >
                    <div style={{ borderBottom: '0.1px solid #ffffff', }}></div>
                    <span style={{
                        padding: '0 10px',
                        color: '#ffffff'
                    }}>ou</span>
                    <div style={{ borderBottom: '0.1px solid #ffffff', }}></div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '35%',
                    margin: '1px auto 35px auto'
                }}>
                    <div style={{ alignContent: 'center', textAlign: 'center', width: '50px', height: '50px', border: 'solid 2px white', borderRadius: '100%' }}><img style={{ width: '35px', marginTop: '3px' }} src="../src/assets/gmail_icon.png" /></div>
                    <div style={{ alignContent: 'center', textAlign: 'center', width: '50px', height: '50px', border: 'solid 2px white', borderRadius: '100%' }}><img style={{ width: '35px', marginTop: '3px' }} src="../src/assets/fc_icon.png" /></div>
                </div>
                <p style={{ color: '#ffffff' }}>Não possui uma conta?  <a style={{ fontWeight: 'bold', textDecoration: 'none', color: 'white' }} href="/cadastro">Cadastre-se</a></p>
        </Box>
    )
}
