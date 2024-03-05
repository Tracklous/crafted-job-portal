import styled from "styled-components";

export const Container = styled.header`
background-color: ${({ theme }) => theme.palette.bgPaper};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xxl}`};
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xxl};

  & span {
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const SubHeading = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin: 0;
`;

export const SearchFieldsContainer = styled.div`
margin-top:  ${({ theme }) => theme.spacing.lg};;
  display: flex;
  & input {
    border-radius: 0;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.commonWhite};
  border-radius: 0px;
`;