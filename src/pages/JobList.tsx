import { FC, useContext, useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { PiCurrencyDollar } from "react-icons/pi";
import { JobContext } from "../context/JobContext";
import { jobDetailsType } from "../models/Jobs.types";
import { AvatarBox, FlexBox, LabelContainer } from "../theme/common.style";
import { getStringInitials } from "../utils/string.manipulation";
import {
  CardDescription,
  CardSubTitle,
  CardTitle,
  ListContainer,
} from "./JobList.styles";
import axios from "axios";
import { JobFiltersContext } from "../context/JobFilterContext";
import { applyJobFilter } from "../utils/jobFilter.utils";

type JobCardProps = {
  job: jobDetailsType;
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
  const { jobs, setJobs } = useContext(JobContext);
  const { selectedOption } = useContext(JobFiltersContext);
  const derivedJobList = applyJobFilter(jobs, selectedOption);
  const hasJobs = derivedJobList && derivedJobList.length > 0;
  const jobsGrammar = hasJobs && derivedJobList.length > 1 ? "Jobs" : "Job";
  const totalJobsLabel = hasJobs
    ? `${derivedJobList.length} ${jobsGrammar} Found`
    : "No Jobs found!";
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    function fetchJobList() {
      setIsLoading(true);
      axios
        .get("/api/jobs")
        .then((res) => {
          console.log(">>>", JSON.parse(res.data));
          setJobs(JSON.parse(res.data));
        })
        .catch((err) => {
          console.error(">>>Err fetchJobList:", err);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    fetchJobList();
  }, []);

  return (
    <>
      <h4>{totalJobsLabel}</h4>
      {isLoading && <h6 style={{ marginTop: "10px" }}>Loading jobs...</h6>}
      <ListContainer>
        {derivedJobList?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ListContainer>
    </>
  );
};
