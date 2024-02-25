import { ReactNode, createContext, useState } from "react";
import { FilterOptions } from "../constants/filters.constants";
import { isDateWithinTimeFrame } from "../utils/date.utils";

export type jobType = {
  id: number;
  title: string;
  company: string;
  jobType: "Any" | "Full-Time" | "Temporary" | "Part-time" | "Remote";
  salaryType: "hourly" | "monthly" | "yearly";
  workExperience: string;
  country: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  description: string;
  skillSet: string[];
  postedDate: string; // ['2024-01-06', '2024-02-19', '2024-02-12', '2024-02-17', '2024-01-16', '2024-02-21', '2024-02-18', '2024-02-21', '2024-01-20', '2024-02-13']
  companyLogo: string;
};

type JobContextType = {
  jobs: null | jobType[];
  setJobs: React.Dispatch<React.SetStateAction<null | any[]>>;
  applyFilter: (a: FilterOptions) => void;
  resetAllFilters: () => void;
  jobsDataSource: jobType[] | [];
};

export const JobContext = createContext<JobContextType>({
  jobs: null,
  setJobs: () => {},
  applyFilter: () => {},
  resetAllFilters: () => {},
  jobsDataSource: [],
});

type JobProviderProps = {
  children: ReactNode;
};

export const DemoJobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    jobType: "Remote",
    salaryType: "hourly",
    company: "Google",
    workExperience: "Any Experience",
    country: "India",
    location: "Hyderabad",
    minSalary: 100,
    maxSalary: 200,
    description:
      "Hyderabad of Google India At Hi-tech city, we're passionate about improving patient outcomes and helping save lives.",
    skillSet: ["HTML", "CSS", "JavaScript"],
    postedDate: "2024-02-18",
    companyLogo: "",
  },
  {
    id: 2,
    title: "Backend Developer",
    jobType: "Full-Time",
    salaryType: "monthly",
    workExperience: "Internship",
    company: "Amazon",
    country: "United States",
    location: "San Jose",
    minSalary: 10000,
    maxSalary: 200000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
    postedDate: "2024-01-20",
    companyLogo: "",
  },
  {
    id: 3,
    title: "Backend Developer",
    salaryType: "yearly",
    workExperience: "Work Remotely",
    company: "Google",
    jobType: "Part-time",
    country: "India",
    location: "Hyderabad",
    minSalary: 10000,
    maxSalary: 300000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
    postedDate: "2024-01-16",
    companyLogo: "",
  },
] satisfies jobType[];

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const jobsDataSource = DemoJobsData;
  const [jobs, setJobs] = useState<null | jobType[] | []>(DemoJobsData);

  function resetAllFilters() {
    setJobs(DemoJobsData);
  }

  const applyFilter = (newFilters: FilterOptions) => {
    const filteredJobs = jobsDataSource?.filter((job) => {
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
        // There is a bug in this filter.
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

    setJobs(filteredJobs);
  };

  return (
    <JobContext.Provider
      value={{ jobs, setJobs, applyFilter, resetAllFilters, jobsDataSource }}
    >
      {children}
    </JobContext.Provider>
  );
};
