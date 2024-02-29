import { Header } from "../components/Header";
import { JobProvider } from "../context/JobContext";
import { JobFiltersProvider } from "../context/JobFilterContext";
import { Column, Container } from "../theme/common.style";
import { JobList } from "./JobList";
import Filters from "./JobListFilters";

export const JobListPage = () => {
  return (
    <JobFiltersProvider>
      <JobProvider>
        <Header />
        <Container>
          <Column $spaceRatio={1}>
            <Filters />
          </Column>
          <Column $spaceRatio={3}>
            <JobList />
          </Column>
        </Container>
      </JobProvider>
    </JobFiltersProvider>
  );
};
