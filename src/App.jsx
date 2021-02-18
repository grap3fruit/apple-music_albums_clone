import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import Main from './components/Main';

const StyledApp = styled.section``;

const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Apple Color Emoji', 'SF Pro', 'SF Pro Icons',
      'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

const App = () => (
  <StyledApp>
    <Global styles={globalStyle} />
    <Main />
  </StyledApp>
);

export default App;
