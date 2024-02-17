import { useState } from "react";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";

import { InputField } from "./InputField";
import {
  Container,
  Heading,
  SubHeading,
  SearchFieldsContainer,
  Button,
} from "./Header.styles";

export const Header = () => {
  const [jobPosition, setJobPosition] = useState("");
  const [jobLocation, setJobLocation] = useState("");

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
          icon={<IoSearchOutline />}
          type="text"
          placeholder="what position your are looking for?"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
        <InputField
          icon={<IoLocationOutline />}
          type="text"
          placeholder="Location"
          value={jobLocation}
          onChange={(e) => setJobLocation(e.target.value)}
        />
        <Button>Search</Button>
      </SearchFieldsContainer>
    </Container>
  );
};
