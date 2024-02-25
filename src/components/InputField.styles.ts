import styled, { css } from "styled-components";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { fadeInAnimation } from "../theme/common.style";

export const Container = styled.div<{ $width: string | null }>`
    width: ${({ $width }) => $width ? $width : '100%'};
`

export const Label = styled.label`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    display: inline-block;
    padding-bottom: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fontFamily};
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    & svg {
        position: absolute;
        transform: translateX(1rem);
        color: rgba(0, 0, 0, 0.65);
    }
`

export const Input = styled.input<{ $error?: boolean }>`
    font-size: 0.85rem;
    padding: 1rem 3rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 100%;

    ${({ theme, $error }) => $error && css`
    border-color:${theme.palette.error};
    `};
`

const EyeIcon = css`
    position: absolute;
    right: 25px;
    color: rgba(0, 0, 0, 0.65);
`

export const ShowPassIcon = styled(BsEye)`
    ${EyeIcon}
`

export const HidePassIcon = styled(BsEyeSlash)`
    ${EyeIcon}
`

export const ErrorText = styled.p`
    position: absolute;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.palette.error};
    margin: 0.1rem 0;
    opacity: 0;
    animation: ${fadeInAnimation} 0.3s ease-in-out forwards;
`