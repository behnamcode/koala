import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from '../FoodDialog/FoodDialog';
//23

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0px 5px 5px grey;
  color: black;
  display: flex;
  flex-direction: column;
`;
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;
// step 26
const OrderContainer = styled.div `
    padding: 10px 0px;
    border-bottom : 1px solid grey;
`
const OrderItem = styled.div `
    padding:10px 0px;
`
export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order's looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>
              Your order:
          </OrderContainer>
          {orders.map(order =>(
            <OrderContainer>
              <OrderItem>
                {order.name}
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
