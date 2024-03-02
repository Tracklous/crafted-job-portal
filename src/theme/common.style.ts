import { colord } from "colord";
import styled, { css, keyframes } from "styled-components";

export const Container = styled.div<{ $FixedHeight?: string }>`
  background-color: ${({ theme }) => theme.palette.bgDefault}; 
  min-height: 90vh;
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xxl}`};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ $FixedHeight }) => $FixedHeight && css`
    min-height: ${$FixedHeight};
    max-height: ${$FixedHeight};
  `}
`;

type ColumnStyleProps = {
  $spaceRatio: number;
};

export const Column = styled.div<ColumnStyleProps>`
  overflow-y :scroll;
  background-color: ${({ theme }) => theme.palette.bgPaper};
  flex: ${({ $spaceRatio }) => $spaceRatio};
  padding: ${({ theme }) => theme.spacing.xs};
`;

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
  background-color: ${({ theme }) => theme.palette.commonWhite};
`;

export const LabelContainer = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) =>
    colord(theme.palette.textSecondary).alpha(0.85).toRgbString()};
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

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
