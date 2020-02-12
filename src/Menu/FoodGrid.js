//15
import styled from 'styled-components';
import { Title } from '../Styles/Title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 40px;
`;

//17
export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: #beee62a1;
  padding: 5px;
  &:hover {
    background-color: red;
  }
`;
//almost 16 but! in this step we import Title to use the
//font family and the color
export const Food = styled.div`
  height: 100px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(80%);
  padding: 10px;
  font-size: 30px;
  color: white;
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;

  text-shadow: 1px 1px 5px black;
  &:hover {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 5px;
    filter: contrast(100%);
    box-shadow: 0px 4px 10px 0px #f6e420;
  }
`;
