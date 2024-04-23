import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = styled(TextField)`
  border-radius: 45px;
  border-shadow: none;
  width: 100%;
  max-width: 576px;
  max-height: 60px;
  background: #343847;

  & input {
    font-size: 1.313rem;
    font-family: "Open Sans";
  }
`;

export const SearchIconColored = styled(SearchIcon)`
  fill: #fff;
  width: 1.2em;
  height: 1.2em;
`;
