import React, { FC } from "react";
import {
  Container,
  CountryInformationContainer,
  CountryInformationContent,
  CountryName,
  CountryInformation,
  IconContainer,
  CurrencyContainer,
  SubTitle,
  CurrencySpan,
  LanguageSpan,
  LanguageContainer,
} from "./Card.styled";
import { CardContent } from "@mui/material";
import { ICountry } from "LogicServices/Countries/useCountries";

interface IProp {
  country: ICountry;
}

const Card: FC<IProp> = ({ country }) => {
  return (
    <Container>
      <CardContent sx={{ width: "100%", padding: 0 }}>
        <CountryInformationContainer>
          <IconContainer>{country.emoji}</IconContainer>
          <CountryInformationContent>
            <CountryName>{country.name}</CountryName>
            <CountryInformation>
              <span>{country.capital}</span>
              <span>{country.states.length} states</span>
              <span>+{country.phone}</span>
            </CountryInformation>
          </CountryInformationContent>
        </CountryInformationContainer>
        <CurrencyContainer>
          <SubTitle>Currency</SubTitle>
          <div>
            <CurrencySpan>{country.currency}</CurrencySpan>
          </div>
        </CurrencyContainer>
        <LanguageContainer>
          <SubTitle>Languages</SubTitle>
          <div>
            {country.languages.slice(0, 2).map((language) => (
              <LanguageSpan>{language.name}</LanguageSpan>
            ))}{" "}
            {country.languages.length > 2 &&
              "+" + (country.languages.length - 2)}
          </div>
        </LanguageContainer>
      </CardContent>
    </Container>
  );
};

export default Card;
