import styled from "styled-components";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  background-color: red;
  display: flex;
`;

const StyledInput = styled.input`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.palette.secondary};
  border-radius: 0px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.commonWhite};
  border-radius: 0px;
`;

export const SearchInput = () => {
  return (
    <Container>
      <StyledInput placeholder="what position your are looking for?" />
      <StyledInput placeholder="Location" />
      <Button onClick={() => console.log(" Search clicked!!")}>Search</Button>
    </Container>
  );
};
