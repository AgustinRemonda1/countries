import usePagination from "./usePagination";
import { useCallback, useEffect, useState } from "react";
import { fetchCountries } from "RepoServices/Countries.repo";

export interface ICountry {
  currency: string;
  languages: {
    name: string;
  }[];
  name: string;
  capital: string;
  phone: string;
  states: {
    name: string;
  }[];
  emoji: string;
}

const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [countriesPaginated, setCountriesPaginated] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>("");
  const { state, actions } = usePagination({
    search,
    countries,
    setCountriesPaginated,
  });

  useEffect(() => {
    const getCountries = async () => {
      const results = await fetchCountries();
      setCountries(results);
    };

    getCountries();
  }, []);

  const onChangeSearch = useCallback(
    (search: string) => {
      setSearch(search);
      actions.onChangePage(0);
    },
    [actions.onChangePage]
  );

  return {
    state: { search, countries: countriesPaginated, ...state },
    actions: { onChangeSearch, ...actions },
  };
};

export default useCountries;
