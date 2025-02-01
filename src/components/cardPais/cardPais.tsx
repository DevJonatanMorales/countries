import { Country } from "../../interfaces/Country";

interface PropCard {
  pais: Country;
}

export const CardPise = ({ pais }: PropCard) => {
  return (
    <section className="card">
      <img className="card__img" src={pais.flags.svg} alt={pais.name.common} />
      <main className="card__content">
        <h1 className="card__title">{pais.name.common}</h1>
        <p className="card__paragraph">Population: {pais.population}</p>
        <p className="card__paragraph">Region: {pais?.region}</p>
        <p className="card__paragraph">Capital: {pais.capital}</p>
      </main>
    </section>
  );
};
