import { useCallback, useEffect, useMemo, useState } from "react";
import { ICountry } from "./useCountries";
import {
  calculateTotal,
  filterAndOrderCountries,
  paginationCuts,
} from "./utils";

interface IProps {
  search: string;
  countries: ICountry[];
  setCountriesPaginated: (countries: ICountry[]) => void;
}

const usePagination = ({
  countries,
  setCountriesPaginated,
  search,
}: IProps) => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(12);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const paginateCountries = () => {
      const { startIndex, endIndex } = paginationCuts({
        page,
        pageSize,
        length: countries.length,
      });

      if (!search) {
        const countriesPaginated = countries.slice(startIndex, endIndex);
        const total = calculateTotal(countries.length, pageSize);
        setCountriesPaginated(countriesPaginated);
        setTotal(total);
      } else {
        const countriesFiltered = filterAndOrderCountries(countries, search);
        const countriesPaginated = countriesFiltered.slice(
          startIndex,
          endIndex
        );
        const total = calculateTotal(countriesFiltered.length, pageSize);
        setCountriesPaginated(countriesPaginated);
        setTotal(total);
      }
    };

    paginateCountries();
  }, [countries, page, pageSize, search]);

  const onChangePage = useCallback((page: number) => {
    setPage(page);
  }, []);

  const onChangePageSize = useCallback((pageSize: number) => {
    setPageSize(pageSize);
  }, []);

  return {
    state: { page, pageSize, total },
    actions: { onChangePage, onChangePageSize },
  };
};

export default usePagination;
