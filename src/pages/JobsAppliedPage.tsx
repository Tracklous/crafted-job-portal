import styled from "styled-components";
import { Container, FlexBox } from "../theme/common.style";

const Content = styled(FlexBox)`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xl}`};
`;

export const JobsAppliedPage = () => {
  return (
    <Container as="main">
      <Content>
        <h3>Your applied jobs </h3>
      </Content>
    </Container>
  );
};
