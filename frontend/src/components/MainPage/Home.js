import React from "react";
import TopTitle from "./TopTilte";
import ParticipatingGroupList from "./ParticipatingGroupList";
import { Container, Grid } from "@material-ui/core";

function MainPage() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <TopTitle></TopTitle>
        <Grid container spacing={3}>
          {[0, 1].map(result => (
            <ParticipatingGroupList></ParticipatingGroupList>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
