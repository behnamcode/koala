import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

//13
const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;
export function Menu() {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      {/*   from step 14 and 15*/}
      <FoodGrid>
        {foods.map(food => (
          <Food img={food.img}>
          {/* Food lable is from step 17 */}
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyled>
  );
}
