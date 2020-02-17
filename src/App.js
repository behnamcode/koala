import React, { useState } from 'react';
//step 19-in this step we entered the Hook
// next line is for creating global style
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrdes';
import { useTitle } from './Hooks/useTitle';
import{useAuthentication} from './Hooks/useAuthentication';
function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({...openFood,...orders});
  return (
    //0-3
    <>
      <GlobalStyle whiteColor bgColor />
      <FoodDialog {...openFood} {...orders} />
      {/* 0-9 */}
      <NavBar {...auth} />
      <Order {...orders} {...openFood} {...auth}/>
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
