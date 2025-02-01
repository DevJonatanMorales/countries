import { TbError404 } from "react-icons/tb";
import { Link } from "react-router";

export const NotFound = () => {
  return (
    <main className="notFount">
      <TbError404 className="notFount__img" />
      <p className="notFount__paragrahp">
        Oops! La página que buscas no existe.
      </p>
      <Link to="/" className="notFount__btnHome">
        Volver al Inicio
      </Link>
    </main>
  );
};
