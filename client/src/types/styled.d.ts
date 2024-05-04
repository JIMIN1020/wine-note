import 'styled-components';

declare module 'styled-components' {
  export interface Colors {
    [key: string]: string;
  }
  export interface Font {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    logo: string;
  }
}
