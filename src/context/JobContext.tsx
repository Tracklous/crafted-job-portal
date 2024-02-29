import { ReactNode, createContext, useState } from "react";
import { FilterOptions } from "../constants/filters.constants";
import { jobDetailsType } from "../models/Jobs.types";
import { isDateWithinTimeFrame } from "../utils/date.utils";

type JobContextType = {
  jobs: null | jobDetailsType[];
  setJobs: React.Dispatch<React.SetStateAction<null | any[]>>;
  applyFilter: (a: FilterOptions) => void;
};

export const JobContext = createContext<JobContextType>({
  jobs: null,
  setJobs: () => {},
  applyFilter: () => {},
});

type JobProviderProps = {
  children: ReactNode;
};

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<null | jobDetailsType[] | []>([]);

  const applyFilter = (newFilters: FilterOptions) => {
    const filteredJobs = jobs?.filter((job) => {
      if (newFilters.country) {
        if (job.country !== newFilters.country) {
          return false;
        }
      }

      if (newFilters.salaryRange) {
        if (job?.maxSalary > Number(newFilters.salaryRange)) {
          return false;
        }
      }

      if (newFilters.salaryType) {
        if (job?.salaryType !== newFilters.salaryType) {
          return false;
        }
      }

      if (newFilters.postingDate) {
        if (!isDateWithinTimeFrame(job.postedDate, newFilters.postingDate)) {
          return false;
        }
      }

      if (newFilters.workExperience) {
        // TODO: There is a bug in this filter.
        if (job.workExperience !== newFilters.workExperience) {
          return false;
        }
      }

      if (newFilters.jobType) {
        if (job.jobType !== newFilters.jobType) {
          return false;
        }
      }

      return true;
    });

    return filteredJobs;
  };

  return (
    <JobContext.Provider value={{ jobs, setJobs, applyFilter }}>
      {children}
    </JobContext.Provider>
  );
};
