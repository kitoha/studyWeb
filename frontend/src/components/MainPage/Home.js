import React from "react";
import TopTitle from "./TopTilte";
import ParticipatingGroupList from "./ParticipatingGroupList";
import ProblemKindCards from "./ProblemKindCards";
import RecruitingGroupList from "./RecruitingGroupList";
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
          <ParticipatingGroupList
            key="1"
            post={posts[0]}
          ></ParticipatingGroupList>
          <RecruitingGroupList key="2" post={posts[1]}></RecruitingGroupList>
        </Grid>
        <ProblemKindCards></ProblemKindCards>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
