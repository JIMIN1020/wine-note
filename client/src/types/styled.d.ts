import 'styled-components';
import { theme } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
  }
}
