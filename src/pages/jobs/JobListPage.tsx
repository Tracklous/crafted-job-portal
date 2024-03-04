import { Header } from "../../components/Header";
import { JobFiltersProvider } from "../../context/JobFilterContext";
import { Column, Container } from "../../theme/common.style";
import { JobList } from "./JobList";
import Filters from "./JobListFilters";

export const JobListPage = () => {
  return (
    <JobFiltersProvider>
      <Header />
      <Container as="main" $FixedHeight="90vh">
        <Column $spaceRatio={1}>
          <Filters />
        </Column>
        <Column $spaceRatio={3}>
          <JobList />
        </Column>
      </Container>
    </JobFiltersProvider>
  );
};
