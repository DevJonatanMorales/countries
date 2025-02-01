import { useDispatch } from "react-redux";
import { setCountry } from "../../features/country";
import { Country } from "../../interfaces/Country";
import { useNavigate } from "react-router";

interface PropCard {
  pais: Country;
}

export const CardPise = ({ pais }: PropCard) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCountry(pais));
    navigate("/pais");
  };

  return (
    <section className="card">
      <img className="card__img" src={pais.flags.svg} alt={pais.name.common} />
      <main className="card__content">
        <h1 className="card__title" onClick={handleClick}>
          {pais.name.common}
        </h1>
        <p className="card__paragraph">Population: {pais.population}</p>
        <p className="card__paragraph">Region: {pais?.region}</p>
        <p className="card__paragraph">Capital: {pais.capital}</p>
      </main>
    </section>
  );
};
