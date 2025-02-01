import { useEffect, useState } from "react";
import { CardPise } from "../components/cardPais/cardPais";

export const Home = () => {
  const [paises, setPaises] = useState([]);
  const [buscarPais, setBuscarPais] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setBuscarPais(value);
  };

  const handleOnKeyUp = (e) => {
    if (e.key !== "Enter") return;
    console.log("paso la validacion");

    if (buscarPais.trim() === "") return getPaises();
    getFilter();
  };

  const getFilter = async () => {
    if (buscarPais.trim() === "") return;
    const paisFilter = await fetch(
      `https://restcountries.com/v3.1/name/${buscarPais}`
    );
    const pais = await paisFilter.json();
    console.log({ getFilter: pais });

    if (pais) setPaises(pais);
  };

  const getPaises = async () => {
    try {
      setIsloading(true);
      const resultPaises = await fetch("https://restcountries.com/v3.1/all");
      const paises = await resultPaises.json();
      setPaises(paises);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getPaises();
  }, []);

  return (
    <article className="article">
      <header className="article__header">
        <h1 className="article__title">Where in the world?</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="nombrePais"
            id="nombrePais"
            value={buscarPais}
            onChange={handleChange}
            onKeyUp={handleOnKeyUp}
          />
        </form>
      </header>
      {isLoading ? <p>Obteniendo los paises</p> : null}
      <main className="content">
        {paises.length ? (
          paises.map((pais) => <CardPise key={pais.name.common} pais={pais} />)
        ) : (
          <p>No hay paises que mostrar</p>
        )}
      </main>
    </article>
  );
};
