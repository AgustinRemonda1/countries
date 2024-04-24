import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";

interface IProps {
  page: number;
  total: number;
  onChangePage: (page: number) => void;
}

const PaginationRounded: FC<IProps> = ({ page, total, onChangePage }) => {
  return (
    <Pagination
      page={page + 1}
      onChange={(e, page) => onChangePage(page - 1)}
      count={total}
      variant="outlined"
      shape="rounded"
      color="primary"
    />
  );
};

export default PaginationRounded;
