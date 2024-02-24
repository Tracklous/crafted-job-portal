import { FC, useContext } from "react";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiCurrencyDollar } from "react-icons/pi";
import { LiaCitySolid } from "react-icons/lia";
import { JobContext, jobType } from "../context/JobContext";
import { AvatarBox, FlexBox, LabelContainer } from "../theme/common.style";
import { getStringInitials } from "../utils/string.manipulation";
import {
  CardTitle,
  CardSubTitle,
  CardDescription,
  ListContainer,
} from "./JobList.styles";

type JobCardProps = {
  job: jobType;
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
  const { jobs } = useContext(JobContext);
  const hasJobs = jobs && jobs.length > 0;
  const jobsGrammar = hasJobs && jobs.length > 1 ? "Jobs" : "Job";
  const totalJobsLabel = hasJobs
    ? `${jobs.length} ${jobsGrammar} Found`
    : "No Jobs found!";

  return (
    <>
      <h4>{totalJobsLabel}</h4>
      <ListContainer>
        {jobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ListContainer>
    </>
  );
};
