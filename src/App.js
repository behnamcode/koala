import React from 'react';
// next line is fo creating global style
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import {Menu} from './Menu/Menu'
//defining a global style 0-2
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => (props.bgColor ? '#C50905' : '#77AD78')};
    color: ${props => (props.whiteColor ? '#F6E420' : 'black')};
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
      <GlobalStyle whiteColor bgColor />
      {/* 0-9 */}
      <NavBar />
      <Banner />
      <Menu/>
    </>
  );
}

export default App;
