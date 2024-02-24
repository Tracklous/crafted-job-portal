import { Header } from "../components/Header";
import { JobProvider } from "../context/JobContext";
import { Column, Container } from "../theme/common.style";
import { JobList } from "./JobList";

export const JobListPage = () => {
  return (
    <JobProvider>
      <Header />
      <Container>
        <Column $spaceRatio={1}>

        </Column>
        <Column $spaceRatio={3}>
          <JobList />
        </Column>
      </Container>
    </JobProvider>
  );
};
