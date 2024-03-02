import { useContext, useState } from "react";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";

import { InputField } from "./InputField";
import {
  Container,
  Heading,
  SubHeading,
  SearchFieldsContainer,
  Button,
} from "./Header.styles";
import { JobFiltersContext } from "../context/JobFilterContext";

export const Header = () => {
  const { setSearchQueries } = useContext(JobFiltersContext);
  const [jobPosition, setJobPosition] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  function handleSearch() {
    setSearchQueries([jobPosition, jobLocation]);
  }

  return (
    <Container>
      <Heading>
        Find your <span> new job</span> today
      </Heading>
      <SubHeading>
        Thousands of job in the computer, engineering and technology sectors are
        waiting for you.
      </SubHeading>
      <SearchFieldsContainer>
        <InputField
          name="position-job"
          icon={<IoSearchOutline />}
          type="text"
          placeholder="what position your are looking for?"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
        <InputField
          name="location-job"
          icon={<IoLocationOutline />}
          type="text"
          placeholder="Location"
          value={jobLocation}
          onChange={(e) => setJobLocation(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchFieldsContainer>
    </Container>
  );
};
