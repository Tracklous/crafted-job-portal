import axios from "axios";
import { Column, Container } from "../theme/common.style";
import styled from "styled-components";
import { InputField } from "../components/InputField";
import React, { useState } from "react";

const CenteredBox = styled(Column)`
  background-color: ${({ theme }) => theme.palette.decentSecondary};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 400px;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FormHeading = styled.h2`
  color: ${({ theme }) => theme.palette.commonWhite};
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.commonWhite};
  align-items: flex-end;
`;

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      console.log(">>Login ", response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <CenteredBox $spaceRatio={1}>
        <FormGrid action="#" onSubmit={(e) => handleSubmit(e)}>
          <FormHeading>Login to your account</FormHeading>
          <InputField
            type="email"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </FormGrid>
      </CenteredBox>
    </Container>
  );
};

// Add tabs section or links in nav bar:
// -- for job seeker. e.g. job-listing, job-applied
// -- for job poster. e.g. posted-job-listing, post-job
