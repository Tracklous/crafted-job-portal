import { colord } from "colord";
import styled from "styled-components";

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

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.palette.textPrimary};
  color: ${({ theme }) =>
    colord(theme.palette.textSecondary).alpha(0.85).toRgbString()};
  font-weight: 500;
`;

export const ApplyButton = styled.button`
 margin-top: ${({ theme }) => theme.spacing.xxs};
 font-size: ${({ theme }) => theme.fontSize.xs};
 padding: ${({ theme }) => theme.spacing.xxs};
 padding-left: 0;
 background-color: ${({ theme }) => theme.palette.commonWhite};
 color: ${({ theme }) => theme.palette.secondary};
`