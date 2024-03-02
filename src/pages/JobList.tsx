import { FC, useContext } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { PiCurrencyDollar } from "react-icons/pi";
import { PaginationFooter } from "../components/PaginationFooter";
import { PAGINATION_PAGE_SIZE } from "../constants/App.config";
import { JobFiltersContext } from "../context/JobFilterContext";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { JobDetailsType } from "../models/Jobs.types";
import { AvatarBox, FlexBox, LabelContainer } from "../theme/common.style";
import { applyJobFilter } from "../utils/jobFilter.utils";
import { getStringInitials } from "../utils/string.manipulation";
import {
  CardDescription,
  CardSubTitle,
  CardTitle,
  ListContainer,
} from "./JobList.styles";

type JobCardProps = {
  job: JobDetailsType;
};

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <li key={job.id}>
      <FlexBox $flex="0 0 7%">
        <AvatarBox>{getStringInitials(job.company)}</AvatarBox>
      </FlexBox>
      <FlexBox>
        <CardTitle>{job.company}</CardTitle>
        <CardSubTitle>{job.title}</CardSubTitle>
        <FlexBox $display="flex" $gap={15}>
          <LabelContainer>
            <IoLocationOutline />
            {job.country}
          </LabelContainer>
          <LabelContainer>
            <LiaCitySolid />
            {job.location}
          </LabelContainer>
          <LabelContainer>
            <AiOutlineClockCircle />
            {job.jobType}
          </LabelContainer>
          <LabelContainer>
            <PiCurrencyDollar />
            {job.maxSalary}
          </LabelContainer>
          <LabelContainer>
            <IoCalendarOutline />
            {job.postedDate}
          </LabelContainer>
        </FlexBox>
        <CardDescription>{job.description}</CardDescription>
      </FlexBox>
    </li>
  );
};

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
        <JobCard key={job.id} job={job} />
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
