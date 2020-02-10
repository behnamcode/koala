import React from 'react';
import styled from 'styled-components';
//23

const OrderStyled = styled.div `
  position:fixed;
  right:0px;
  top:48px;
  width:340px;
  height: calc(100% - 48px);
  background-color:red;
  z-index:10;
  box-shadow:4px 0px 5px 5px grey;
  color:black;
`
export function Order(){
  return <OrderStyled>Your Order's looking pretty empty.</OrderStyled>
}
