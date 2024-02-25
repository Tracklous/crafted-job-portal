import { useState } from "react";
import { Container } from "../theme/common.style";
import { FormGrid, GridItem, CustomInputField } from "./PostJob.styles";
import {
  DropdownOptionType,
  DropdownSelect,
} from "../components/DropdownSelect";
import {
  JOB_TYPE,
  SALARY_TYPE,
  SKILLS_SET,
  WORK_EXPERIENCE,
} from "../constants/filters.constants";
import { getErrorMsg, validateJobPostFormData } from "../utils/form.validation";
import {
  POST_A_JOB_FIELDS,
  PostAJobFieldsKeys,
} from "../constants/postJob.constants";

export const PostJob = () => {
  const [jobFormFields, setJobFormFelids] = useState(POST_A_JOB_FIELDS);
  const [validationErrors, setValidationErrors] = useState<
    Partial<{ [key in PostAJobFieldsKeys]: string }>[]
  >([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // We get property name from event.target.name and set the value from onChange in it
    // So name in our input component should be same as the property in data state.
    const newFormFields = {
      ...jobFormFields,
      [event.target.name]: event.target.value,
    };

    setJobFormFelids(newFormFields);
  };

  const handleSelectChange = (name: string, options: DropdownOptionType[]) => {
    setJobFormFelids((prev) => ({
      ...prev,
      [name]: options,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateJobPostFormData(jobFormFields, setValidationErrors);

    if (isValid) {
      console.log(jobFormFields);
    }
    // console.log("Data is invalid: ", jobFormFields);
  };

  return (
    <Container>
      <FormGrid as="form" action="#" onSubmit={handleFormSubmit}>
        <ul>
          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Job Title"
              name="title"
              placeholder="Software Engineer"
              type="text"
              value={jobFormFields.title}
              onChange={handleInputChange}
              error={getErrorMsg("title", validationErrors)}
            />
          </GridItem>

          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Company Name"
              name="companyName"
              placeholder="Ex: Google"
              type="text"
              value={jobFormFields.companyName}
              onChange={handleInputChange}
              error={getErrorMsg("companyName", validationErrors)}
            />
          </GridItem>
          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Minimum Salary"
              name="minSalary"
              placeholder="2000"
              type="text"
              value={jobFormFields.minSalary}
              onChange={handleInputChange}
              error={getErrorMsg("minSalary", validationErrors)}
            />
          </GridItem>
          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Maximum Salary"
              name="maxSalary"
              placeholder="10000"
              type="text"
              value={jobFormFields.maxSalary}
              onChange={handleInputChange}
              error={getErrorMsg("maxSalary", validationErrors)}
            />
          </GridItem>
          <GridItem $flex={1 / 2}>
            <DropdownSelect
              label="Salary Type"
              name="salaryType"
              placeholder="Choose your salary type"
              options={SALARY_TYPE}
              selectedOption={jobFormFields.salaryType}
              onSelect={handleSelectChange}
            />
          </GridItem>
          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Job Location"
              name="location"
              placeholder="Ex: Hyderabad"
              type="text"
              value={jobFormFields.location}
              onChange={handleInputChange}
              error={getErrorMsg("location", validationErrors)}
            />
          </GridItem>

          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Job Posting Date"
              name="postingDate"
              placeholder="mm/dd/yyyy"
              type="date"
              value={jobFormFields.postingDate}
              onChange={handleInputChange}
              error={getErrorMsg("postingDate", validationErrors)}
            />
          </GridItem>

          <GridItem $flex={1 / 2}>
            <DropdownSelect
              label="Experience Level"
              name="workExperience"
              placeholder="Select your experience level"
              options={WORK_EXPERIENCE}
              selectedOption={jobFormFields.workExperience}
              onSelect={handleSelectChange}
            />
          </GridItem>
          <GridItem>
            <DropdownSelect
              name="skillSet"
              label="Required Skill Sets"
              placeholder="Choose your skills"
              multiselect
              options={SKILLS_SET}
              selectedOption={jobFormFields.skillSet}
              onSelect={handleSelectChange}
            />
          </GridItem>

          <GridItem $flex={1 / 2}>
            <CustomInputField
              label="Company Logo"
              name="companyLogo"
              placeholder="Paste your image url: https://wwww.intuit.com/in/Intuit_Logo.svg"
              type="text"
              value={jobFormFields.companyLogo}
              onChange={handleInputChange}
              error={getErrorMsg("companyLogo", validationErrors)}
            />
          </GridItem>
          <GridItem $flex={1 / 2}>
            <DropdownSelect
              label="Employment Type"
              name="jobType"
              placeholder="Select your employment type"
              options={JOB_TYPE}
              selectedOption={jobFormFields.jobType}
              onSelect={handleSelectChange}
            />
          </GridItem>
          <GridItem>
            <CustomInputField
              label="Job Description"
              name="description"
              placeholder="Type you job description"
              type="description"
              value={jobFormFields.description}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem>
            <button type="submit">Post</button>
          </GridItem>
        </ul>
      </FormGrid>
    </Container>
  );
};
