import { ReactNode, createContext, useState } from "react";

type jobType = {
  id: number;
  title: string;
  company: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  description: string;
  skillSet: string[];
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
    company: "Google",
    location: "Hyderabad",
    minSalary: 10000,
    maxSalary: 20000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Bangalore",
    minSalary: 10000,
    maxSalary: 20000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Google",
    location: "Hyderabad",
    minSalary: 10000,
    maxSalary: 20000,
    description: "This is demo job description",
    skillSet: ["HTML", "CSS", "JavaScript"],
  },
];

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
