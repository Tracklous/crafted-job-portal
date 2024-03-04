import styled from "styled-components";
import { FlexBox, fadeInAnimation } from "../../theme/common.style";

export const FieldLabel = styled.h5`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const FilterGroupWrapper = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const ExtendedFlexBox = styled(FlexBox)`
  justify-content: space-between;
  display: flex;
  align-items: center;
  min-height: 22px;

  & button {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    background-color: ${({ theme }) => theme.palette.bgPaper};
    color: ${({ theme }) => theme.palette.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 4px;
    text-align: right;
    opacity: 0;
    animation: ${fadeInAnimation} 100ms ease-in-out forwards;
  }
`;