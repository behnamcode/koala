import React from 'react';
// next line is fo creating global style
import { createGlobalStyle } from 'styled-components';

//defining a global style 0-2
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.bgColor ? '#007090' : '#77AD78'};
    color: ${props => props.whiteColor ? 'white' :'black' };
    font-family: 'Open Sans', sans-serif;
    }
    h1,h2,h3{
      font-family:'Righteous',cursive;
    }
  }
`;
function App() {
  return (
    //0-3
    <>
    <h1>Hello SliceLine</h1>
      <GlobalStyle whiteColor  bgColor/>
      <div></div>
    </>
  );
}

export default App;
