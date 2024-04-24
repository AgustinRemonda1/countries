import { ICountry } from "./useCountries";

interface IPaginationCuts {
  page: number;
  pageSize: number;
  length: number;
}

export const paginationCuts = ({ page, pageSize, length }: IPaginationCuts) => {
  const startIndex = page * pageSize;
  const endIndex = Math.min(startIndex + pageSize, length);

  return { startIndex, endIndex };
};

export const calculateTotal = (items: number, pageSize: number) => {
  return Math.round(items / pageSize);
};

export const filterAndOrderCountries = (
  countries: ICountry[],
  search: string
) => {
  const countriesFiltered = countries.filter((country) =>
    country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  const countriesOrdered = countriesFiltered.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return countriesOrdered;
};
