import { useState } from 'react';
//step 25
export function useOpenFood() {
  const [openFood, setOpenFood] = useState();
  return {
    openFood,
    setOpenFood
  };
}
