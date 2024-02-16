import { darktheme, lightTheme } from "./palette";

const defaultTheme = {
    fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.375rem"
    },
    spacing: {
        xs: '0.875rem',
        sm: "1rem",
        md: "1.125rem",
        lg: "1.375rem",
        xl: "5rem",
        xxl: "10rem"
    },
    fontWeight: {
        light: 300,
        normal: 500,
        bold: 600,
        extraBold: 800
    },
    borderRadius: {
        small: "5px",
        medium: "10px",
        large: "15px",
        circle: "50%",
    },
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    },
    shadow: [

    ]
};

const theme = {
    dark: {
        palette: darktheme,
        ...defaultTheme,
    },
    light: {
        palette: lightTheme,
        ...defaultTheme,
    },
} as const;

export default theme;