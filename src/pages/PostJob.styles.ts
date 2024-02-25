import styled from "styled-components";
import { InputField } from "../components/InputField";
import { FlexBox } from "../theme/common.style";

export const CustomInputField = styled(InputField)`
  .input-field & {
    padding: 1rem 1rem;
    border: 0px solid rgba(0, 0, 0, 0.25);
    background-color: blue;
  }
`;

export const FormGrid = styled(FlexBox)`
  flex: 1;
  display: flex;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xl}`};

  & ul {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xxs};
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const GridItem = styled.li<{ $flex?: number | string }>`
  flex: ${({ $flex }) => ($flex ? `${$flex} 45%` : "1 0 100%")};
  padding: 0;
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1 0 100%;
  }
`;