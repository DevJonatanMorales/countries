import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  useGetByNameQuery,
  useGetByRegionQuery,
} from "../../services/countries";
import { Country } from "../../interfaces/Country";
import { setCounties } from "../../features/countries";
import { useDispatch } from "react-redux";

export const HeaderShowCountry = () => {
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("0");
  const { data } = useGetByNameQuery(searchCountry);
  const { data: resultRegion } = useGetByRegionQuery(region);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchCountry(value);
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setRegion(value);
  };

  const setData = (data: Country[]) => {
    if (data?.length) dispatch(setCounties(data));
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setData(resultRegion);
  }, [resultRegion]);

  return (
    <header className="article__header">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <CiSearch className="form__icon" />
        <input
          className="form__input"
          type="text"
          name="searchCountry"
          id="searchCountry"
          value={searchCountry}
          placeholder="Search for a country…"
          onChange={handleChange}
        />
      </form>
      <select className="regions" onChange={handleChangeSelect} value={region}>
        <option className="regions__options" value="0">
          Filter by Region
        </option>
        <option className="regions__options" value="africa">
          Africa
        </option>
        <option className="regions__options" value="america">
          America
        </option>
        <option className="regions__options" value="Asia">
          Asia
        </option>
        <option className="regions__options" value="europe">
          Europe
        </option>
        <option className="regions__options" value="oceania">
          Oceania
        </option>
      </select>
    </header>
  );
};
