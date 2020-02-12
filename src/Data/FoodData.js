//26
export function formatPrice(price){
  return price.toLocaleString('en-US',{
    style:'currency',
    currency: 'EUR'
  })
}
//14

export const foodsItems = [
  { 
    name: 'Chesse Pizza',
    img: 'img/Pizza1.jpeg',
    section: 'Pizza',
    price: 12
  },
  {
    name: 'Pepperoni Pizza',
    img: 'img/Pizza2.jpeg',
    section: 'Pizza',
    price: 14
  },
  { 
   name: 'Hot Pizza',
   img: 'img/Pizza3.jpeg',
   section: 'Pizza',
   price: 18.4 
  },
  {
    name: 'Neapolitan Pizza',
    img: 'img/Pizza4.jpeg',
    section: 'Pizza',
    price: 19.8
  },
  {
    name: 'Pizza Marinara',
    img: 'img/Pizza5.jpeg',
    section: 'Pizza',
    price: 20.2
  },
  {
    name: 'Pizza Margherita',
    img: 'img/Pizza6.jpeg',
    section: 'Pizza',
    price: 18.1
  },
  {
    name: 'Pizza Margherita extra',
    img: 'img/Pizza7.jpeg',
    section: 'Pizza',
    price: 17.2
  },
  {
    name: 'Chicago Pizza',
    img: 'img/Pizza8.jpeg',
    section: 'Pizza',
    price: 6.2
  },
  {
    name: 'Pizza Baking',
    img: 'img/Pizza9.jpeg',
    section: 'Pizza',
    price: 7.8
  },
  {
    name: 'Sicilian Pizza',
    img: 'img/Pizza11.jpeg',
    section: 'Pizza',
    price: 9
  },
  {
    name: 'Greek Pizza',
    img: 'img/Pizza12.jpeg',
    section: 'Pizza',
    price: 11.4
  },
  {
    name: 'California Pizza',
    img: 'img/Pizza13.jpeg',
    section: 'Pizza',
    price: 3.2
  },
  {
    name: 'Detroit Pizza',
    img: 'img/Pizza14.jpeg',
    section: 'Pizza',
    price: 9.4
  },
  {
    name: 'St. Louis Pizza',
    img: 'img/Pizza15.jpeg',
    section: 'Pizza',
    price: 6.3
  },
  {
    name: 'Veggie Pizza',
    img: 'img/Pizza16.jpeg',
    section: 'Pizza',
    price: 6.4
  },
  {
    name: 'BBQ Chicken Pizza',
    img: 'img/Pizza17.jpeg',
    section: 'Pizza',
    price: 6.3
  },
  {
    name: 'Hawaiian Pizza',
    img: 'img/Pizza18.jpeg',
    section: 'Pizza',
    price: 2.3
  },
  {
    name: 'Buffalo Pizza',
    img: 'img/Pizza19.jpeg',
    section: 'Pizza',
    price: 18.5
  },
  { name: 'Burger', 
    img: 'img/Burger.jpeg', 
    section: 'Burger', 
    price: 9.3 },
  {
    name: 'Burger & Patty',
    img: 'img/Burger5.jpeg',
    section: 'Burger',
    price: 3.5
  },
  {
    name: 'Burger& Spinach',
    img: 'img/Burger4.jpeg',
    section: 'Burger',
    price: 8.6
  },
  { name: 'Veggie',
    img: 'img/Veggi.jpeg',
    section: 'Veggie',
    price: 1.3 },
  {
    name: 'Veggie Dish',
    img: 'img/Veggi2.jpeg',
    section: 'Veggie',
    price: 2.4
  },
  {
    name: 'Veggie & Egg',
    img: 'img/Veggi3.jpeg',
    section: 'Veggie',
    price: 9.4
  },
  {
    name: 'Veggie & Cheese',
    img: 'img/Veggi4.jpeg',
    section: 'Veggie',
    price: 2.4
  },
  { name: 'Fries', 
    img: 'img/Fries.jpeg',
    section: 'Fries',
    price: 4.6 
  },
  {
    price:1,
    name:'Soda',
    section:'Drinks',
    choices:['Coke','Sprite','Root Beer']
  }
];
//this is officialy step 18
export const foods = foodsItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
