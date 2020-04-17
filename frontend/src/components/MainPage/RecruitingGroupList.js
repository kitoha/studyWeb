import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Typography
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputGroupInfoDialog from "./InputGroupInfoDialog";
import axios from "axios";
import { useSelector } from "react-redux";

function RecruitingGroupList() {
  const [rows, setRows] = useState(null);
  const oAuthToken = useSelector(state => state.oauthTokenReducer.oAuthToken);
  let table = null;

  useEffect(() => {
    if (oAuthToken != null) {
      axios
        .get("http://localhost:8080/api/v1/allGroups", {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(window.sessionStorage.getItem("userInfo")).token
          }
        })
        .then(response => {
          console.log(response.data);
          setRows(response.data);
        });
    } else {
      setRows(null);
    }
  }, [oAuthToken]);

  if (rows == null) {
    table = (
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography>로그인이 필요합니다.</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  } else {
    table = (
      <TableBody>
        {rows.map(row => (
          <TableRow hover key={row.id}>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }

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
                그룹 모집중
                <InputGroupInfoDialog></InputGroupInfoDialog>
              </TableCell>
            </TableRow>
          </TableHead>
          {table}
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default RecruitingGroupList;
