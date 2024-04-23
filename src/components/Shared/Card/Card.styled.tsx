import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Container = styled(Card)`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 20%;
  height: 100%;
  padding: 20px;
  padding-bottom: 0;
  background-color: #343847;
  color: #fff;
  border-radius: 20px;
  border: 2px solid #505568;
`;

export const CountryInformationContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
`;

export const CountryInformationContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CountryName = styled.div`
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30.26px;
`;

export const CountryInformation = styled.div`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  & span {
    padding-right: 5px;
    margin-right: 2.5px;
    border-right: 1px #505568 solid;
  }
`;

export const IconContainer = styled.div`
  background: #fff;
  border-radius: 50%;
  color: #000;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 11px;
`;

export const CurrencyContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  border-bottom: 1px #505568 solid;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.79px;
  margin-bottom: 5px;
`;

export const CurrencySpan = styled.span`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
  background: #2dcab1;
  border-radius: 100px;
  padding: 4px 6px;
  margin-right: 5px;
`;

export const LanguageContainer = styled.div`
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
`;

export const LanguageSpan = styled.span`
  background: #4a94cc;
  border-radius: 100px;
  padding: 4px 6px;
  margin-right: 5px;
`;
