import { useEffect, useState } from "react";
import { CardPise } from "../cardPais/cardPais";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllQuery } from "../../services/countries";
import { setCountry } from "../../features/countries";
import { Country } from "../../interfaces/Country";
import { RootState } from "../../app/store";
import { Title } from "../header/Title";

export const ShowPaises = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);

  const { data } = useGetAllQuery(undefined);
  const dispatch = useDispatch();
  const country = useSelector((state: RootState) => state.counter);

  const setData = (data: Country[]) => {
    setIsloading(false);
    if (data?.length) dispatch(setCountry(data));
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <article className="article">
      {isLoading && !country.length ? (
        <Title message="Obteniendo los paises" />
      ) : null}

      {country.length ? (
        <main className="article__content">
          {country.map((pais) => (
            <CardPise key={pais.name.common} pais={pais} />
          ))}
        </main>
      ) : null}

      {!country.length && !isLoading ? (
        <Title message="No hay paises que mostrar" />
      ) : null}
    </article>
  );
};
