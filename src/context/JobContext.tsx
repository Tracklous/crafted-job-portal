import { ReactNode, createContext, useState } from "react";
import { JobDetailsType } from "../models/Jobs.types";

type JobContextType = {
  jobs: null | JobDetailsType[];
  setJobs: React.Dispatch<React.SetStateAction<null | any[]>>;
};

export const JobContext = createContext<JobContextType>({
  jobs: null,
  setJobs: () => {},
});

type JobProviderProps = {
  children: ReactNode;
};

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<null | JobDetailsType[] | []>([]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
