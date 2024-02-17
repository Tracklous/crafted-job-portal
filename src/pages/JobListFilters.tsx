import { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import {
  COUNTRIES,
  SALARY_RANGE,
  SALARY_TYPE,
  DATE_OF_POSTING,
  WORK_EXPERIENCE,
  JOB_TYPE,
} from "../constants/filters.constants";
import {
  RadioButtonGroup,
  SquareButtonGroup,
} from "../components/RadioButtonGroup";
import styled from "styled-components";

const FieldLabel = styled.h5`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.textPrimary};
`;

const FilterGroupWrapper = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Filters = () => {
  const { applyFilter } = useContext(JobContext);
  const [selectedOption, setSelectedOption] = useState({
    country: COUNTRIES[0].value,
    salaryRange: "",
    salaryType: "",
    postingDate: "",
    workExperience: "",
    jobType: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // We get property name from event.target.name and set the value from onChange in it
    // So name in our input component should be same as the property in data state

    console.log(">>", {
      selectedOption,
      name: event.target.name,
      value: event.target.value,
    });

    setSelectedOption({
      ...selectedOption,
      [event.target.name]: event.target.value,
    });
  };

  //   const handleFilter = (skillSet, minSalary) => {
  //     // Filter jobs based on skill set and min salary
  //     // Update jobs context state accordingly
  //   };

  return (
    <>
      <h4>Filters</h4>
      <FilterGroupWrapper>
        <FieldLabel>Location</FieldLabel>
        <RadioButtonGroup
          options={COUNTRIES}
          selectedOption={selectedOption.country}
          onChange={handleInputChange}
        />
      </FilterGroupWrapper>

      <FilterGroupWrapper>
        <FieldLabel>Salary</FieldLabel>
        <SquareButtonGroup
          options={SALARY_TYPE}
          selectedOption={selectedOption.salaryType.toString()}
          onChange={handleInputChange}
        />
        <RadioButtonGroup
          options={SALARY_RANGE}
          selectedOption={selectedOption.salaryRange.toString()}
          onChange={handleInputChange}
        />
      </FilterGroupWrapper>

      <FilterGroupWrapper>
        <FieldLabel>Date of posting</FieldLabel>
        <RadioButtonGroup
          options={DATE_OF_POSTING}
          selectedOption={selectedOption.postingDate}
          onChange={handleInputChange}
        />
      </FilterGroupWrapper>

      <FilterGroupWrapper>
        <FieldLabel>Work experience</FieldLabel>
        <RadioButtonGroup
          options={WORK_EXPERIENCE}
          selectedOption={selectedOption.workExperience}
          onChange={handleInputChange}
        />
      </FilterGroupWrapper>

      <FilterGroupWrapper>
        <FieldLabel>Type of employment</FieldLabel>
        <RadioButtonGroup
          options={JOB_TYPE}
          selectedOption={selectedOption.jobType}
          onChange={handleInputChange}
        />
      </FilterGroupWrapper>
    </>
  );
};

export default Filters;
