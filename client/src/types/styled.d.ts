import 'styled-components';
import { theme } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.color;
    fontSize: typeof theme.fontSize;
  }
}
