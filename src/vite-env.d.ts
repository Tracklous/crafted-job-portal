/// <reference types="vite/client" />

import { ThemeOption } from "./models/theme.types";


declare module 'styled-components' {
    export interface DefaultTheme extends ThemeOption { }
}