import React from "react";
import TopTitle from "./TopTilte";
import ParticipatingGroupList from "./ParticipatingGroupList";
import ProblemKindCards from "./ProblemKindCards";
import { Container, Grid } from "@material-ui/core";

function MainPage() {
  const posts = [
    {
      title: "참여한 그룹",
      key: "participating"
    },
    {
      title: "모집 그룹",
      key: "recruiting"
    }
  ];

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <TopTitle></TopTitle>
        <Grid item={true} container spacing={1}>
          {[0, 1].map(result => (
            <ParticipatingGroupList
              key={result}
              post={posts[result]}
            ></ParticipatingGroupList>
          ))}
        </Grid>
        <ProblemKindCards></ProblemKindCards>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
