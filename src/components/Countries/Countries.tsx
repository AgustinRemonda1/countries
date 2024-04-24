import React, { useLayoutEffect } from "react";
import {
  CardContainer,
  Container,
  PaginationContainer,
  SearcherContainer,
} from "./Countries.styled";
import Pagination from "../Shared/Pagination";
import Searcher from "../Shared/Searcher";
import Card from "../Shared/Card";
import useCountries from "LogicServices/Countries/useCountries";

const Countries = () => {
  const { state, actions } = useCountries();

  useLayoutEffect(() => {
    const handleResize = () => {
      window.innerWidth < 768
        ? actions.onChangePageSize(3)
        : actions.onChangePageSize(12);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [actions.onChangePageSize]);

  return (
    <Container>
      <SearcherContainer>
        <Searcher
          label="Search..."
          value={state.search}
          onChange={actions.onChangeSearch}
        />
      </SearcherContainer>
      <CardContainer>
        {state.countries.map((country) => (
          <Card country={country} />
        ))}
      </CardContainer>
      <PaginationContainer>
        <Pagination
          page={state.page}
          total={state.total}
          onChangePage={actions.onChangePage}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Countries;
