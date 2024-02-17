import styled from "styled-components";
import { JobProvider } from "../context/JobContext";
import Filters from "./JobListFilters";
import { JobList } from "./JobList";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.bgDefault};
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xxl}`};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

type ColumnStyleProps = {
  $spaceRatio: number;
};

const Column = styled.div<ColumnStyleProps>`
  background-color: ${({ theme }) => theme.palette.bgPaper};
  flex: ${({ $spaceRatio }) => $spaceRatio};
  padding: ${({ theme }) => theme.spacing.xs};
`;

export const JobListPage = () => {
  return (
    <JobProvider>
      <Container>
        <Column $spaceRatio={1}>
          <Filters />
        </Column>
        <Column $spaceRatio={3}>
          <JobList />
        </Column>
      </Container>
    </JobProvider>
  );
};
