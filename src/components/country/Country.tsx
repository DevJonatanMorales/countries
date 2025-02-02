import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { clearCountry } from "../../features/country";

export const Country = () => {
  const country = useSelector((state: RootState) => state.country);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log({ country });

  const handleOnClick = () => {
    dispatch(clearCountry());
    navigate("/");
  };

  return (
    <section className="country">
      <button className="country__btn" type="button" onClick={handleOnClick}>
        <IoArrowBack className="country__icon" />
        Back
      </button>
      <div className="country__content">
        <img
          className="country__img"
          src={country.flags?.png}
          alt={country?.name?.common ?? "error al cargar la imagen"}
        />
        <main className="country__info">
          <h1 className="country__title">{country?.name?.common}</h1>

          <p className="country__paragraph">
            Native Name:{" "}
            <span className="country__paragraph-normal">
              {country?.name?.common}
            </span>
          </p>
          <p className="country__paragraph">
            Population:{" "}
            <span className="country__paragraph-normal">
              {country.population}
            </span>
          </p>
          <p className="country__paragraph">
            Region:{" "}
            <span className="country__paragraph-normal">{country?.region}</span>
          </p>
          <p className="country__paragraph">
            Sub Region:{" "}
            <span className="country__paragraph-normal">
              {country?.subregion}
            </span>
          </p>
          <p className="country__paragraph">
            Capital:{" "}
            <span className="country__paragraph-normal">{country.capital}</span>
          </p>
          <p className="country__paragraph">
            Top Level Domain:{" "}
            <span className="country__paragraph-normal">{country.tld}</span>
          </p>
          <p className="country__paragraph">
            Currencies:{" "}
            <span className="country__paragraph-normal">{country.tld}</span>
          </p>
        </main>
      </div>
    </section>
  );
};
