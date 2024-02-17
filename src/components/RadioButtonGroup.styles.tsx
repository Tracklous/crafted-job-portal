import styled, { css } from "styled-components";

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 150px;
  overflow: auto;
  margin-top: 8px;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 10s ease-in-out;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

type RadioInputUiProps = {
  $checked: boolean;
};

export const RadioInputUi = styled.span<RadioInputUiProps>`
  cursor: pointer;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.palette.secondary : theme.palette.bgDefault};
  position: relative;

  ${({ $checked }) =>
    $checked &&
    css`
      &::after {
        content: "";
        position: absolute;
        translate: 50% 50%;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.palette.commonWhite};
      }
    `}
`;

export const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  padding: ${({ theme }) => `8px ${theme.spacing.xs}`};
  border-radius: 50%;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.palette.textSecondary};
`;

export const RadioSquareContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const RadioSquareLabel = styled.label<RadioInputUiProps>`
  display: inline-block;
  padding: 8px 20px;
  border: 1px solid
    ${({ theme, $checked }) =>
      $checked ? theme.palette.textSecondary : theme.palette.bgDefault};
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.bgPaper};
  border-radius: 2px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.palette.textSecondary};
  text-transform: capitalize;
`;
