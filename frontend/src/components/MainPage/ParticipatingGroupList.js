import React from "react";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

function createData(number) {
  return { number };
}

function ParticipatingGroupList(props) {
  const [dense, setDense] = React.useState(false);
  const rows = [
    createData(1),
    createData(2),
    createData(3),
    createData(4),
    createData(5)
  ];

  return (
    <Grid item={true} xs={12} md={6}>
      <TableContainer
        style={{
          marginTop: 30,
          marginLeft: 25,
          maxWidth: "90%",
          maxHeight: 200,
          border: "1px solid",
          overflow: "auto"
        }}
        component={Paper}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#CC99FF",
                  height: "25px",
                  fontWeight: "bold"
                }}
              >
                {props.post.title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={props.post.key + row.number}>
                <TableCell component="th" scope="row">
                  {props.post.key + row.number}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ParticipatingGroupList;
