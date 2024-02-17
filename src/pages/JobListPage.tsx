import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.bgDefault};
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xxl}`};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
  color: ${({ theme }) => theme.palette.textSecondary};
`;
export const JobListPage = () => {
  return <Container>JobListPage</Container>;
};
