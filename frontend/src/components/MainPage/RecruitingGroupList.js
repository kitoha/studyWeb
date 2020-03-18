import React from "react";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Button,
  Typography
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

function createData(number) {
  return { number };
}

function RecruitingGroupList(props) {
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
                <Button
                  align="right"
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                >
                  등록
                </Button>
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

export default RecruitingGroupList;
