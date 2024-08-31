import { useNavigate } from "react-router-dom"

export default function ButtonLogin () {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/home')
    }

    return (
        <button style={{
            height: '60px',
            width: '330px',
            backgroundColor: '#0098ff',
            borderStyle: 'none',
            borderRadius: '10px',
            color: '#ffffff',
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: 'bold'
        }}
        onClick={handleNavigate}
        type="submit">Login</button>
    )
}