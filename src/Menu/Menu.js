import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

//13
const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;
//here we continue on step 19
export function Menu({setOpenFood}) {
  return (
    <MenuStyled>
      {/* completing step 18 */}
      {Object.entries(foods).map(([sectionName,foods])=>(
        <>
        <h1>{sectionName}</h1>
      {/*   from step 14 and 15*/}
      <FoodGrid>
        {foods.map(food => (
          <Food img={food.img} onClick={()=>{
            setOpenFood(food);
          }}>
          {/* Food lable is from step 17 */}
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
