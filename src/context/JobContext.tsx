import { ReactNode, createContext, useState } from "react";

export type jobType = {
  id: number;
  title: string;
  company: string;
  jobType: "Any" | "Full-Time" | "Temporary" | "Part-time" | "Remote";
  location: string;
  minSalary: number;
  maxSalary: number;
  description: string;
  skillSet: string[];
  postedDate: string; // ['2024-01-06', '2024-02-19', '2024-02-12', '2024-02-17', '2024-01-16', '2024-02-21', '2024-02-18', '2024-02-21', '2024-01-20', '2024-02-13']
};

type JobContextType = {
  jobs: null | jobType[];
  setJobs: React.Dispatch<React.SetStateAction<null | any[]>>;
  applyFilter: (a: jobType[]) => void;
};

export const JobContext = createContext<JobContextType>({
  jobs: null,
  setJobs: () => {},
  applyFilter: () => {},
});

type JobProviderProps = {
  children: ReactNode;
};

export const DemoJobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    jobType: "Remote",
    company: "Google",
    location: "Hyderabad",
    minSalary: 10000,
    maxSalary: 20000,
    description:
      "Location: Remote, Hyderabad of Google India At Hi-tech city, we're passionate about improving patient outcomes and helping save lives.",
    skillSet: ["HTML", "CSS", "JavaScript"],
    postedDate: "2024-02-18",
  },
  {
    id: 2,
    title: "Backend Developer",
    jobType: "Full-Time",
    company: "Amazon",
    location: "Bangalore",
    minSalary: 10000,
    maxSalary: 20000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
    postedDate: "2024-01-20",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Google",
    jobType: "Part-time",
    location: "Hyderabad",
    minSalary: 10000,
    maxSalary: 20000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
    postedDate: "2024-01-16",
  },
] satisfies jobType[];

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<null | jobType[]>(DemoJobsData);

  function applyFilter(filteredJobs: jobType[]) {
    setJobs(filteredJobs);
  }

  return (
    <JobContext.Provider value={{ jobs, setJobs, applyFilter }}>
      {children}
    </JobContext.Provider>
  );
};
