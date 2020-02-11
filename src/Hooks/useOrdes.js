import { useState } from 'react';
//step 25-1
export function useOrders() {
  const [orders, setOrders] = useState([]);
  return {
    orders,
    setOrders
  };
}
