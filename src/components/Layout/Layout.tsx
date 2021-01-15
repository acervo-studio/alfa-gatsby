import React from "react"
import ways from 'ways';
import { GlobalStyle } from './styled';
import { ThemeProvider } from 'styled-components';
import theme from '../../data/styles/themes/default'
import { TypeHeading, TypeHeadingSizes } from '../common/typography/TypeHeading';

export default function Layout({ children }) {

  const gotoIndex = () => {
    ways.go('/')
  }

  const gotoAbout = () => {
    ways.go('/about')
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TypeHeading
          as='h1'
          size={TypeHeadingSizes.H1}
        >Alfa APP</TypeHeading>

        <button onClick={gotoIndex}>GO TO INDEX</button>
        <button onClick={gotoAbout}>GO TO ABOUT</button>

        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
