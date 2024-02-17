import React, { FC } from "react";
import styled from "styled-components";
import { colord } from "colord";

const ButtonSurface = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.commonWhite};
  -webkit-box-shadow: 18px 10px 17px 0px
    ${({ theme }) => colord(theme.palette.commonBlack).alpha(0.1).toRgbString()};
  -moz-box-shadow: 18px 10px 17px 0px
    ${({ theme }) => colord(theme.palette.commonBlack).alpha(0.1).toRgbString()};
  box-shadow: 18px 10px 17px 0px
    ${({ theme }) => colord(theme.palette.commonBlack).alpha(0.1).toRgbString()};
`;

type ButtonProps = {
  label?: string;
  ariaLabel?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export const CustomButton: FC<ButtonProps> = ({
  label = "No title",
  onClick,
  ariaLabel = "Button",
}) => {
  return (
    <ButtonSurface onClick={onClick} aria-label={ariaLabel}>
      {label}
    </ButtonSurface>
  );
};
