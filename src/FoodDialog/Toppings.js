import styled from 'styled-components';
import React from 'react';
// step 30
const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  color: black;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, i) => (
        <CheckboxLabel>
          <ToppingCheckbox
            type="checkbox"
            checked={topping.checked}
            onClick={() => {
              checkTopping(i);
            }}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  );
}
