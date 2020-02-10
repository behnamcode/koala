import React from 'react';
// next line is for creating global style
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import {Menu} from './Menu/Menu'
import {GlobalStyle} from './Styles/GlobalStyle'
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
