import React,{useState} from 'react';
//step 19-in this step we entered the Hook
// next line is for creating global style
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {FoodDialog} from './FoodDialog/FoodDialog'
import {GlobalStyle} from './Styles/GlobalStyle';
function App() {

  const [openFood,setOpenFood] = useState();
  return (
    //0-3
    <>
      <GlobalStyle whiteColor bgColor />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      {/* 0-9 */}
      <NavBar />
      <Banner />
      <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
