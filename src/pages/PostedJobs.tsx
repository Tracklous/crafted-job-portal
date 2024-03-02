import styled from "styled-components";
import { Container, FlexBox } from "../theme/common.style";

const PostContent = styled(FlexBox)`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xl}`};
`;

export const PostedJobs = () => {
  return (
    <Container as="main">
      <PostContent>
        <h3>Your job posted job: </h3>
        
      </PostContent>
    </Container>
  );
};
