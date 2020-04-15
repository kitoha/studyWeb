import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography
} from "@material-ui/core";

function InputGroupInfoDialog() {
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [roomId, setRoomId] = useState("123");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitGroupInfo = () => {
    axios
      .post(
        "http://localhost:8080/api/v1/posts",
        {
          title: groupName,
          content: title,
          reader: author
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(window.sessionStorage.getItem("userInfo")).token
          }
        }
      )
      .then(response => {
        console.log(response.data);
        setOpen(false);
      });
  };

  const onChangeGroupName = e => {
    setGroupName(e.target.value);
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeAuthor = e => {
    setAuthor(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {"추가할 그룹 정보를 입력하세요."}
        </DialogTitle>
        <DialogContent>
          <div>
            <Typography>그룹명</Typography>
            <TextField
              id="groupName"
              name="groupName"
              value={groupName}
              onChange={onChangeGroupName}
            ></TextField>
            <Typography>제목</Typography>
            <TextField
              id="title"
              name="title"
              value={title}
              onChange={onChangeTitle}
            ></TextField>
            <Typography>작성자</Typography>
            <TextField
              id="author"
              name="author"
              value={author}
              onChange={onChangeAuthor}
            ></TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={submitGroupInfo} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InputGroupInfoDialog;
