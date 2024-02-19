import { colord } from "colord";
import styled from "styled-components";
import { fadeInAnimation } from "../theme/common.style";

export const ListContainer = styled.ul`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  flex-wrap: wrap;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;

  & li {
    padding: ${({ theme }) => theme.spacing.xs};
    border: 1px solid ${({ theme }) => theme.palette.bgDefault};
    flex: 1 0 90%;
    background-color: ${({ theme }) => theme.palette.commonBlack};
    display: flex;
    opacity: 0;
    animation: ${fadeInAnimation} 200ms ease-in-out forwards;
  }
`;

export const CardTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.palette.textSecondary};
  margin-bottom: 8px;
`;

export const CardSubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.textPrimary};
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

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.palette.textPrimary};
  color: ${({ theme }) =>
    colord(theme.palette.textSecondary).alpha(0.85).toRgbString()};
  font-weight: 500;
`;