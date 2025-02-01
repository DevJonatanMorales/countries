import { useEffect, useState } from "react";
import { CardPise } from "../cardPais/cardPais";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllQuery } from "../../services/countries";
import { setCounties } from "../../features/countries";
import { Country } from "../../interfaces/Country";
import { RootState } from "../../app/store";
import { Title } from "../header/Title";
import { HeaderShowCountry } from "../HeaderShowCountry/HeaderShowCountry";

export const ShowPaises = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);

  const { data } = useGetAllQuery(undefined);
  const dispatch = useDispatch();
  const counties = useSelector((state: RootState) => state.counter);

  const setData = (data: Country[]) => {
    setIsloading(false);
    if (data?.length) dispatch(setCounties(data));
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <article className="article">
      <HeaderShowCountry />
      {isLoading && !counties.length ? (
        <Title message="Obteniendo los paises" />
      ) : null}

      {counties.length ? (
        <main className="article__content">
          {counties.map((pais) => (
            <CardPise key={pais.name.common} pais={pais} />
          ))}
        </main>
      ) : null}

      {!counties.length && !isLoading ? (
        <Title message="No hay paises que mostrar" />
      ) : null}
    </article>
  );
};
