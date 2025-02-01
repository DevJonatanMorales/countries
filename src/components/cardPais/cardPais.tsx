export const CardPise = ({ pais }) => {
  return (
    <article>
      <h1>PASI: {pais.name.common}</h1>
      <p>Population: {pais.population}</p>
      <p>Region: {pais?.region ?? "no hay region"} </p>
      <p>Capital: {pais.capital}</p>
    </article>
  );
};
