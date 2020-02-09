//15
import styled from 'styled-components';
import {Title} from '../Styles/Title'
export const FoodGrid = styled.div `
  display:grid;
  grid-template-columns :1fr 1fr 1fr;
  grid-gap:20px;
`

//17
export const FoodLabel = styled.div `
  position:absolute;
  background-color: #beee62a1;
  padding:5px;
`
//almost 16 but! in this step we import Title to use the
//font family and the color
export const Food = styled(Title) `
  height: 100px;
  background-image: ${({img}) => `url(${img});` };
  background-position: center;
  background-size: cover;
  filter:contrast(80%);
  padding: 10px;
  font-size:30px;
  color:white;
  border-radius:7px;
  box-shadow: 0px 0px 6px 0px #2cb1bb;
  text-shadow: 1px 1px 5px black;
  &:hover {
    cursor:pointer;
    opacity: 0.9;
  }
`