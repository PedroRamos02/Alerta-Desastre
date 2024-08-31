import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TelaLogin from './pages/TelaLogin'
import TelaCadastro from './pages/TelaCadastro'
import Home from './pages/Home'
import RegistroCalamidade from './pages/RegistroCalamidade'

export const AppRoutes: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaLogin />}></Route>
        <Route path="/cadastro" element={<TelaCadastro />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/registro_calamidade" element={<RegistroCalamidade />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
