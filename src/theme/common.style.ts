import { colord } from "colord";
import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type BoxProps = {
  $flex?: number | string;
  $display?: "flex" | "block";
  $gap?: number;
};

export const FlexBox = styled.div<BoxProps>`
  flex: ${({ $flex }) => $flex || 1};
  display: ${({ $display }) => $display || "block"};
  gap: ${({ $gap }) => `${$gap}px` || "none"};
`;


export const AvatarBox = styled.div`
  margin-top: 1px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) =>
    colord(theme.palette.divider).alpha(0.08).toRgbString()};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;