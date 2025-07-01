import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Estudo from './pages/Estudo';
import Perfil from './pages/Perfil';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/estudo" element={<Estudo />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}