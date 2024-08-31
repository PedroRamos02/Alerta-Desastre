import { Box } from "@mui/material";

export default function CardInfos () {
    return (
        <Box sx={{
            width: '90%',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            borderRadius: '15px',
            margin: '20px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2);',
            padding: '10px 25px',
        }}>
            <h3 style={{color: '#0E4A67', fontWeight: 'bold', margin: '20px 0' }}>Contatos em caso de emergência</h3>
            <p style={{marginBottom: '5px'}}>Defesa Civil - (51) 985852239</p>
            <p style={{marginBottom: '5px'}}>SAMU - (51) 3289 0156</p>
            <p style={{marginBottom: '5px'}}>Brigada Militar - (51) 32882740</p>
            <h3 style={{marginTop: '30px', color: '#EE5757'}}>Em caso de emergência e calamidades, procure um local seguro e entre em contato com as autoridades de sua região</h3>
        </Box>
    )
}