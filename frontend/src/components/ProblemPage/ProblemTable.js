import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  TablePagination,
  Typography,
  Container,
  Box
} from "@material-ui/core";

function createData(problemName, rating, solved) {
  return {
    name: problemName,
    rating: rating,
    solved: solved
  };
}

const rows = [
  createData("Div713", 710, "NO"),
  createData("Div711", 711, "YES"),
  createData("Div710", 712, "NO"),
  createData("Div713", 713, "YES"),
  createData("Div714", 714, "NO"),
  createData("Div715", 715, "YES"),
  createData("Div716", 716, "YES")
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: "name", label: "문제번호" },
  { id: "rating", label: "난이도" },
  { id: "solved", label: "상태" }
];

const useStyles = makeStyles(theme => ({
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

function ProblemTable(props) {
  const classes = useStyles();
  const { tableName } = props;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function requestSortTable(property) {
    const isAsc = orderBy === property && order === "asc" ? "desc" : "asc";

    setOrder(isAsc);
    setOrderBy(property);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container style={{ marginTop: 50 }} maxWidth="lg">
      <Grid item={true} xs={12}>
        <Box style={{ height: "50px" }}>
          <Typography
            style={{ fontSize: "20px", marginLeft: "10px" }}
            display="block"
            align="left"
          >
            구현
          </Typography>
        </Box>

        <TableContainer style={{ overflow: "hidden" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell
                    style={{
                      backgroundColor: "#CC99FF",
                      height: "25px",
                      fontWeight: "bold"
                    }}
                    key={headCell.id}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => requestSortTable(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <span className={classes.visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow hover key={row.rating}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.solved}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Grid>
    </Container>
  );
}

export default ProblemTable;
