import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

export default function ButtonRegistroCal () {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        Swal.fire({
            title: 'Registrado!',
            text: 'Aviso de calamidade encaminhado',
            icon: 'success',
          })
        navigate('/home')
        
    }

    return (
        <button style={{
            height: '60px',
            width: '310px',
            backgroundColor: '#ff9800',
            borderStyle: 'none',
            borderRadius: '10px',
            color: '#ffffff',
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: 'bold',
            margin: '20px auto'
        }}
        onClick={handleNavigate}
        type="submit"
        
        >Registrar Calamidade</button>
    )
}