//14

export const foodsItems = [
  {name:'Chesse Pizza',
  img:'img/Pizza1.jpeg',
  section:'Pizza'
},
  {name:'Pepperoni Pizza',
  img:'img/Pizza2.jpeg',
  section:'Pizza'
},
  {name:'Hot Pizza',
  img:'img/Pizza3.jpeg',
  section:'Pizza'
},
  {name:'Neapolitan Pizza',
  img:'img/Pizza4.jpeg',
  section:'Pizza'
},
  {name:'Pizza Marinara',
  img:'img/Pizza5.jpeg',
  section:'Pizza'
},
  {name:'Pizza Margherita',
  img:'img/Pizza6.jpeg',
  section:'Pizza'
},
  {name:'Pizza Margherita extra',
  img:'img/Pizza7.jpeg',
  section:'Pizza'
},
  {name:'Chicago Pizza',
  img:'img/Pizza8.jpeg',
  section:'Pizza'
},
  {name:'Pizza Baking',
  img:'img/Pizza9.jpeg',
  section:'Pizza'
},
  {name:'Sicilian Pizza',
  img:'img/Pizza11.jpeg',
  section:'Pizza'
},
  {name:'Greek Pizza',
  img:'img/Pizza12.jpeg',
  section:'Pizza'
},
  {name:'California Pizza',
  img:'img/Pizza13.jpeg',
  section:'Pizza'
},
  {name:'Detroit Pizza',
  img:'img/Pizza14.jpeg',
  section:'Pizza'
},
  {name:'St. Louis Pizza',
  img:'img/Pizza15.jpeg',
  section:'Pizza'
},
  {name:'Veggie Pizza',
  img:'img/Pizza16.jpeg',
  section:'Pizza'
},
  {name:'BBQ Chicken Pizza',
  img:'img/Pizza17.jpeg',
  section:'Pizza'
},
  {name:'Hawaiian Pizza',
  img:'img/Pizza18.jpeg',
  section:'Pizza'
},
  {name:'Buffalo Pizza',
  img:'img/Pizza19.jpeg',
  section:'Pizza'
},
  {name:'Burger',
  img:'img/Burger.jpeg',
  section:'Burger'
},
  {name:'Burger & Patty',
  img:'img/Burger5.jpeg',
  section:'Burger'
},
  {name:'Burger& Spinach',
  img:'img/Burger4.jpeg',
  section:'Burger'
},
  {name:'Veggi',
  img:'img/Veggi.jpeg',
  section:'Veggi'
},
  {name:'Veggi Dish',
  img:'img/Veggi2.jpeg',
  section:'Veggi'
},
  {name:'Veggi & Egg',
  img:'img/Veggi3.jpeg',
  section:'Veggi'
},
  {name:'Veggi & Cheese',
  img:'img/Veggi4.jpeg',
  section:'Veggi'
},
  {name:'Fries',
  img:'img/Fries.jpeg',
  section:'Fries'
}
];
 //this is officialy step 18
export const foods = foodsItems.reduce((res,food)=>{
  if(!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
},{})