import 'styled-components';
import theme from './theme';

interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    main: string;
    light: string;
  };
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
