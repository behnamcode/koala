//0-6
import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/Title';
//0-7
const NavBarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;
//11
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 2px #141417;
`;
//after firebase
const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 60px;
`;
const LoginButton = styled.span`
  cursor: pointer;
`;
// 0-8
export function NavBar({ login, LoggedIn,logout }) {
  return (
    <NavBarStyled>
      <Logo>
        Slice Line{' '}
        <span role="img" aria-label="slice line">
          🍕
        </span>
      </Logo>
      <UserStatus>
        {LoggedIn !== 'loading' ? (
          <>
          {LoggedIn ? `Hello 👤 ${LoggedIn.displayName} / `: ''}
          {LoggedIn ? (
            <LoginButton onClick = {logout}>Log out</LoginButton>
          ): (<LoginButton onClick={login}>Log in / Sign up</LoginButton>)
          }
          </>
        ): (
          'Loading...'
        )}

      </UserStatus>
    </NavBarStyled>
  );
}
