import { useContext } from "react";
import { JobContext } from "../context/JobContext";

export const JobList = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs?.map((job) => (
          <li key={job.id}>
            {job.title} - {job.maxSalary} per hour
          </li>
        ))}
      </ul>
    </div>
  );
};
