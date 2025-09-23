import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Outlet />
      <div>
        <h1>Página Inicial</h1>
        <p>Bem-vindo ao nosso site!</p>
        <nav>
          <Link to="/dashboard">Ir para Dashboard (Protegida)</Link>
          <br />
          <Link to="/profile">Ir para Perfil (Protegida)</Link>
        </nav>
      </div>
    </>
  );
};
