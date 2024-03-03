import { useEffect } from "react";
import { PaginationFooter } from "../components/PaginationFooter";
import { PAGINATION_PAGE_SIZE } from "../constants/App.config";
import { useAuth } from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { JobDetailsType } from "../models/Jobs.types";
import { Column, Container, ListContainer } from "../theme/common.style";
import { ListCardView } from "./JobListCardView";

export const JobsAppliedPage = () => {
  const { user, updateCurrentUserTrigger } = useAuth();
  const { data: jobs, isLoading } = useFetch<JobDetailsType[]>({
    url: "/api/jobs",
  });
  const filteredJobs = jobs?.filter((job) =>
    user?.jobApplied.includes(Number(job.id))
  );
  const { paginatedData, currentPage, nextPage, prevPage } =
    usePagination<JobDetailsType>(filteredJobs || [], {
      initialPageSize: PAGINATION_PAGE_SIZE,
    });
  const hasJobs = filteredJobs && filteredJobs.length > 0;
  const jobsGrammar = hasJobs && filteredJobs.length > 1 ? "Jobs" : "Job";
  const totalJobsLabel = hasJobs
    ? `${filteredJobs.length} ${jobsGrammar} Applied`
    : "No job application!";

  useEffect(() => {
    updateCurrentUserTrigger();
  }, []);

  // Job application list card UI/UX.
  const jobsApplicationList = hasJobs && (
    <ListContainer>
      {paginatedData?.map((job) => (
        <ListCardView key={job.id} job={job} />
      ))}
      <PaginationFooter
        totalPages={filteredJobs.length / PAGINATION_PAGE_SIZE}
        currentPage={currentPage}
        onNextPage={nextPage}
        onPrevPage={prevPage}
      />
    </ListContainer>
  );

  return (
    <Container as="main" $FixedHeight="90vh">
      <Column $spaceRatio={1}>
        <h4>{totalJobsLabel}</h4>
        {isLoading && <h6 style={{ marginTop: "10px" }}>Loading jobs...</h6>}
        {!isLoading && jobsApplicationList}
      </Column>
    </Container>
  );
};
