import { useCallback, useEffect, useState } from "react";
import { fetchCountries } from "~/RepoServices/Countries.repo";

export interface ICountry {
  currency: string;
  languages: {
    name: string;
  }[];
  name: string;
  phone: string;
  states: {
    name: string;
  }[];
  emoji: string;
}

const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const getCountries = async () => {
      const results = await fetchCountries("");
      setCountries(results);
    };

    getCountries();
  }, []);

  const onChangeSearch = useCallback((search: string) => {
    setSearch(search);
  }, []);

  return { state: { search, page, countries }, actions: { onChangeSearch } };
};

export default useCountries;
