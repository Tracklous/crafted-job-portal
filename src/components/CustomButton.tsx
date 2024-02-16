import React, { FC } from "react";
import styled from "styled-components";
import { colord } from "colord";

const ButtonSurface = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.commonWhite};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  -webkit-box-shadow: 18px 10px 17px 0px
    ${({ theme }) => colord(theme.palette.commonBlack).alpha(0.1).toRgbString()};
  -moz-box-shadow: 18px 10px 17px 0px
    ${({ theme }) => colord(theme.palette.commonBlack).alpha(0.1).toRgbString()};
  box-shadow: 18px 10px 17px 0px
    ${({ theme }) => colord(theme.palette.commonBlack).alpha(0.1).toRgbString()};
`;

type ButtonProps = {
  title?: string;
  ariaLabel?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export const CustomButton: FC<ButtonProps> = ({
  title = "No title",
  onClick,
  ariaLabel = "Button",
}) => {
  return (
    <ButtonSurface onClick={onClick} aria-label={ariaLabel}>
      {title}
    </ButtonSurface>
  );
};
