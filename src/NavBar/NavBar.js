//0-6
import React from 'react'
import styled from 'styled-components'
import {pizzaRed} from '../Styles/colors';
import {Title} from '../Styles/Title'
//0-7
 const NavBarStyled = styled.div `
  background-color: ${pizzaRed};
  padding:10px;
`
//11
const Logo = styled(Title) `
  font-size : 20px;
  color:white;
  text-shadow : 1px 1px 2px #141417;
`
// 0-8
export function NavBar () {
  return <NavBarStyled>
  <Logo>
    Slice Line 🍕
  </Logo>
  </NavBarStyled> ;
}