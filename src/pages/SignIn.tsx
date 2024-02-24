import { Column, Container } from "../theme/common.style";

export const SignIn = () => {
  return (
    <Container>
      <Column $spaceRatio={1}>SignIn page</Column>
    </Container>
  );
};

// Add tabs section or links in nav bar:
// -- for job seeker. e.g. job-listing, job-applied
// -- for job poster. e.g. posted-job-listing, post-job
