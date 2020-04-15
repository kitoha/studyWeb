import React from "react";
import TopTitleContainer from "../containers/TopTitleContainer";
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
        <TopTitleContainer></TopTitleContainer>
        <Grid item={true} container spacing={1}>
          <ParticipatingGroupList
            key="1"
            post={posts[0]}
          ></ParticipatingGroupList>
          <RecruitingGroupList key="2"></RecruitingGroupList>
        </Grid>
        <ProblemKindCards></ProblemKindCards>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
