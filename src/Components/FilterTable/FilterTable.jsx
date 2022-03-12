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
import { useHistory } from "react-router-dom";
import { formateDateTime } from "../../services/utils";

const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

function FilterTable(props) {   

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    let history = useHistory();

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.Data.length - page * rowsPerPage);

  if(props.Data.length === 0){
    return (
        <></>
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
                <TableCell align="right">Data e Hora</TableCell>
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
                    <TableCell align="right"><a href={`/${row.Instrument.trim()}Result/${row._id}`}>Ver Resultados</a></TableCell>
                    <TableCell align="right">{row.Instrument}</TableCell>
                    <TableCell align="right">{formateDateTime(row.Datetime)}</TableCell>
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