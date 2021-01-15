import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Breakpoint } from '../../data/styles/Breakpoint';
import { minWidth } from '../../util/style/mixins/respondTo';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: calc(100vw / 1920 * 10);
  }

  body {
    width: 100%;

    ${minWidth(Breakpoint.M)} {
      background-color: red;
    }

    ${minWidth(Breakpoint.L)} {
      background-color: purple;
    }
  }
`;
