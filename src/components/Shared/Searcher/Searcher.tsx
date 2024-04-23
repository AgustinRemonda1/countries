import React, { FC } from "react";
import { SearchInput, SearchIconColored } from "./Searcher.styled";
import useSearchInput from "./useSearcher";
import FormControl from "@mui/material/FormControl";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
}

const Searcher: FC<IProps> = ({ label, value, onChange, debounce = 300 }) => {
  const { draft, onTyping } = useSearchInput({ value, onChange, debounce });

  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <Box width={576}>
        <SearchInput
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIconColored />
              </InputAdornment>
            ),
            disableUnderline: true,
            style: {
              color: "#535659",
            },
          }}
          placeholder={label}
          InputLabelProps={{ shrink: false }}
          variant="outlined"
          fullWidth
          sx={{
            "& fieldset": {
              borderRadius: "45px",
              color: "#FFF",
              border: "2px solid #535659",
            },
            "&:hover fieldset": {
              border: "none",
            },
            input: {
              "&::placeholder": {
                color: "#535659",
                fontSize: "1.313rem",
                fontFamily: "Open Sans",
              },
            },
            height: "60px",
          }}
        />
      </Box>
    </FormControl>
  );
};

export default Searcher;
