import React from 'react';
// next line is fo creating global style
import { createGlobalStyle } from 'styled-components';

//defining a global style 0-2
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.bgColor ? '#007090' : '#77AD78'};
    color: ${props => props.whiteColor ? 'white' :'black' };
    
    }
  }
`;
function App() {
  return (
    //0-3
    <>
      <GlobalStyle whiteColor  bgColor/>
      <div>Hello SliceLine</div>
    </>
  );
}

export default App;
