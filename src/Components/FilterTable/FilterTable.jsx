//import { Table } from "react-bootstrap";
import { setIdTestData } from "../../services/auth";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import React, { useState } from 'react';



const useStyles = makeStyles({
    table: {
      minWidth: 0
    }
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread2", 356, 16.0, 49, 3.9),
    createData("Gingerbread3", 356, 16.0, 49, 3.9),
    createData("Gingerbread4", 356, 16.0, 49, 3.9),
    createData("Gingerbread5", 356, 16.0, 49, 3.9),
    createData("Gingerbread6", 356, 16.0, 49, 3.9),
    createData("Gingerbread7", 356, 16.0, 49, 3.9),
    createData("Gingerbread8", 356, 16.0, 49, 3.9),
    createData("Gingerbread9", 356, 16.0, 49, 3.9),
    createData("Gingerbread10", 356, 16.0, 49, 3.9),
    createData("Gingerbread11", 356, 16.0, 49, 3.9),
    createData("Gingerbread12", 356, 16.0, 49, 3.9),
    createData("Gingerbread13", 356, 16.0, 49, 3.9)
  ];

function FilterTable(props) {

    const handleResult = (id) =>{
        setIdTestData(id);
    }

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  if(props.Data.length === 0){
    return (
        <>
            <h1>Procure por um usuário</h1>
        </>
    )
  }
  else{
    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">&nbsp;</TableCell>
                <TableCell align="right">Instrumento</TableCell>
                <TableCell align="right">Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.Data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.Username}
                    </TableCell>
                    <TableCell align="right"><a href="/">{"Ver resultado"}</a></TableCell>
                    <TableCell align="right">{row.Instrument}</TableCell>
                    <TableCell align="right">{row.Datetime}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={props.Data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={
                ({ from, to, count }) => {return '' + from + '-' + to + ' de ' + count}
            }
            labelRowsPerPage={"Linhas por página"}
          />
        </TableContainer>
      );
  }
  
}

export default FilterTable;