import { Box } from "@mui/material";

interface InputConfig {
    labelType: string;
    inputType: string;
    placeholderText: string;
    largura: string;
    spaceBottom: string
}

export const InputLogin: React.FC<InputConfig> = ({ labelType, inputType, placeholderText, largura, spaceBottom}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: `${spaceBottom}px`
        }}>
            <label htmlFor={labelType}
                style={{
                    fontStyle: '16px',
                    marginBottom: '10px'
                }}
            >{labelType}</label>
            <input type={inputType} id={labelType} placeholder={placeholderText}
                style={{
                    width:`${largura}px`,
                    height:'48px',
                    borderRadius: '10px',
                    borderStyle:'solid',
                    borderColor: 'white',
                    borderWidth: '1px',
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '0 20px',
                    fontSize: '18px',
                    outline: 'none',                    
                
                }}
            ></input>
        </Box>
    )
}