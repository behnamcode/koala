import { createGlobalStyle } from 'styled-components';

//defining a global style 0-2
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => (props.bgColor ? '#C50905' : '#77AD78')};
    color: ${props => (props.whiteColor ? '#F6E420' : 'black')};
    //0-4
    font-family: 'Open Sans', sans-serif;
    margin:0;
    }
    //0-4
    h1,h2,h3{
      font-family:'Righteous',cursive;
    }
  }
`;
