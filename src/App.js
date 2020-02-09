import React from 'react';
// next line is fo creating global style
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './NavBar/NavBar';

//defining a global style 0-2
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.bgColor ? '#007090' : '#77AD78'};
    color: ${props => props.whiteColor ? 'white' :'black' };
    //0-4
    font-family: 'Open Sans', sans-serif;
    margin:0;
    }
    //0-4
    h1,h2,h3{
      font-family:'Righteous',cursive;
    }
  }
`;
function App() {
  return (
    //0-3
    <>
      <GlobalStyle whiteColor  bgColor/>
      {/* 0-9 */}
      <NavBar/>
      <div>hello sliceline</div>
    </>
  );
}

export default App;
