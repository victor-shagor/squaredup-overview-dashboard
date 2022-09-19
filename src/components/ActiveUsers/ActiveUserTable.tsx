import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ActiveUserTableProps } from "constants/interfaces";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ActiveUsersTable = ({ users }: ActiveUserTableProps) => {
  const tableHeader = ["S/N", "FirstName", "LastName", "Email", "Created"];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeader.map((el) => (
              <StyledTableCell key={el} align="left">
                {el}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length ? (
            users.map((row, idx) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {idx + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.created}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <Box sx={{ minHeight: "18rem" }}>No data yet</Box>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActiveUsersTable;
