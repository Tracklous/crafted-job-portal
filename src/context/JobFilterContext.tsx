import { ReactNode, createContext, useState } from "react";
import {
  FilterOptions,
  filterDefaultState,
} from "../constants/filters.constants";

type JobFiltersContextType = {
  selectedOption: FilterOptions;
  setSelectedOption: React.Dispatch<React.SetStateAction<FilterOptions>>;
  isFilterEmpty: boolean;
  searchQueries: string[];
  setSearchQueries: React.Dispatch<React.SetStateAction<string[]>>;
};

export const JobFiltersContext = createContext<JobFiltersContextType>({
  selectedOption: filterDefaultState,
  setSelectedOption: () => {},
  isFilterEmpty: false,
  searchQueries: [],
  setSearchQueries: () => {},
});

type JobFilterProviderProps = {
  children: ReactNode;
};

export const JobFiltersProvider: React.FC<JobFilterProviderProps> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState(filterDefaultState);
  const [searchQueries, setSearchQueries] = useState<string[]>([]);
  const isFilterEmpty = Object.values(selectedOption).some(Boolean);

  return (
    <JobFiltersContext.Provider
      value={{
        selectedOption,
        setSelectedOption,
        isFilterEmpty,
        searchQueries,
        setSearchQueries,
      }}
    >
      {children}
    </JobFiltersContext.Provider>
  );
};
