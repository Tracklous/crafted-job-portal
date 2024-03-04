import { useContext } from "react";
import { PaginationFooter } from "../../components/PaginationFooter";
import { PAGINATION_PAGE_SIZE } from "../../constants/App.config";
import { JobFiltersContext } from "../../context/JobFilterContext";
import { useFetch } from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";
import { JobDetailsType } from "../../models/Jobs.types";
import { ListContainer } from "../../theme/common.style";
import { applyJobFilter } from "../../utils/jobFilter.utils";
import { ListCardView } from "./JobListCardView";

export const JobList = () => {
  const { selectedOption, searchQueries } = useContext(JobFiltersContext);
  // Async logic
  const { data, isLoading, isError } = useFetch({
    url: "/api/jobs",
  });
  const JobsList = data as JobDetailsType[] | null;
  const filteredJobs = applyJobFilter(JobsList, selectedOption, searchQueries);
  const { paginatedData, currentPage, nextPage, prevPage } =
    usePagination<JobDetailsType>(filteredJobs || [], {
      initialPageSize: PAGINATION_PAGE_SIZE,
    });
  // UI vars
  const hasJobs = filteredJobs && filteredJobs.length > 0;
  const jobsGrammar = hasJobs && filteredJobs.length > 1 ? "Jobs" : "Job";
  const totalJobsLabel = hasJobs
    ? `${filteredJobs.length} ${jobsGrammar} Found`
    : "No Jobs found!";

  // Job list card UI/UX.
  const jobListUi = hasJobs && (
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
    <>
      <h4>{totalJobsLabel}</h4>
      {isLoading && <h6 style={{ marginTop: "10px" }}>Loading jobs...</h6>}
      {isError && !isLoading ? <h6>Something went wrong!!</h6> : jobListUi}
    </>
  );
};
