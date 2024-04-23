import React from "react";
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
  const iterator = new Array(12).fill(null);
  const { state } = useCountries();
  return (
    <Container>
      <SearcherContainer>
        <Searcher label="Search..." value="" onChange={(value) => {}} />
      </SearcherContainer>
      <CardContainer>
        {state.countries.map((country) => (
          <Card country={country} />
        ))}
      </CardContainer>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </Container>
  );
};

export default Countries;
