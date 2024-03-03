import { FC, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { PiCurrencyDollar } from "react-icons/pi";
import { useAuth } from "../context/AuthContext";
import { useFetchMutation } from "../hooks/useFetch";
import { JobDetailsType } from "../models/Jobs.types";
import { AvatarBox, FlexBox, LabelContainer } from "../theme/common.style";
import { getStringInitials } from "../utils/string.manipulation";
import {
  ApplyButton,
  CardDescription,
  CardSubTitle,
  CardTitle,
} from "./JobList.styles";

type JobCardProps = {
  job: JobDetailsType;
  mode?: "job-list" | "applied-list";
};

export const ListCardView: FC<JobCardProps> = ({ job, mode = "job-list" }) => {
  const { user } = useAuth();
  const [isApplied, setIsApplied] = useState(
    user?.jobApplied.includes(Number(job.id))
  );
  const { mutate: applyForJob, isLoading } = useFetchMutation({
    url: "/api/apply-job",
  });

  function handleJobApply() {
    applyForJob({ jobId: job.id }, () => {
      setIsApplied(true);
    });
  }

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
        {isApplied && mode == "job-list" ? (
          <ApplyButton disabled={isApplied}>Applied</ApplyButton>
        ) : (
          <ApplyButton onClick={handleJobApply} disabled={isLoading}>
            Quick Apply
          </ApplyButton>
        )}
      </FlexBox>
    </li>
  );
};
