import { useContext } from "react";
import {
  COUNTRIES,
  SALARY_RANGE,
  SALARY_TYPE,
  DATE_OF_POSTING,
  WORK_EXPERIENCE,
  JOB_TYPE,
  filterDefaultState,
  FilterOptions,
} from "../../constants/filters.constants";
import {
  RadioButtonGroup,
  SquareButtonGroup,
} from "../../components/RadioButtonGroup";
import { FlexBox } from "../../theme/common.style";
import {
  ExtendedFlexBox,
  FieldLabel,
  FilterGroupWrapper,
} from "./JobListFilters.styles";
import { JobFiltersContext } from "../../context/JobFilterContext";

export const Filters = () => {
  const { selectedOption, isFilterEmpty, setSelectedOption } =
    useContext(JobFiltersContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // We get property name from event.target.name and set the value from onChange in it
    // So name in our input component should be same as the property in data state
    const newFilters = {
      ...selectedOption,
      [event.target.name]: event.target.value,
    } as FilterOptions;

    setSelectedOption(newFilters);
  };

  const resetFilters = () => {
    setSelectedOption(filterDefaultState);
  };

  return (
    <>
      <FlexBox>
        <ExtendedFlexBox>
          <h4>Filters</h4>
          {isFilterEmpty && (
            <button onClick={resetFilters}>Reset Filters</button>
          )}
        </ExtendedFlexBox>
      </FlexBox>
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
