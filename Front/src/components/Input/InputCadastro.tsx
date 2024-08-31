import { Box } from "@mui/material";

interface InputCastroConfig {
    labelType: string;
    inputType: string;
    labelText: string;
    placeholderText: string;
}

export const InputCadastro: React.FC<InputCastroConfig> = ({ labelType, placeholderText, inputType, labelText }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            marginBottom: '22px'
        }}>
             <label htmlFor={labelType}
                style={{
                    fontSize: '18px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    color: '#6FCF97'
                }}
            >{labelText}</label>
            <input type={inputType} id={labelType} placeholder={placeholderText}
                style={{
                    width: '300px',
                    height:'48px',
                    backgroundColor: "#ffffff", 
                    borderRadius: "15px", 
                    color: 'white',
                    padding: '0 20px',
                    fontSize: '18px',
                    outline: 'solid',
                    borderColor: '#6FCF97',
                    borderStyle: "solid"                   
                
                }}
            ></input>
        </Box>
    )
}