import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { isAuthenticated, logOut } from '../auth';

const HeaderWrapper = styled.header`
  display: flex;

  padding: 1.5rem 0;
`;

const Logo = styled(Link)`
  display: block;

  color: ${(props) => props.theme.colors.primary};

  font-size: 0.875rem;
  font-weight: 600;

  text-decoration: none;
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.colors.primary};
`;

const Nav = styled.nav`
  flex: 1;

  display: flex;
  align-items: center;

  margin-left: 0.5rem;
`;

const NavList = styled.ul`
  flex: 1;

  display: flex;

  margin-top: 0;
  margin-bottom: 0;
`;

const NavListItem = styled.li`
  margin-left: 0.75rem;
`;

const AuthNavListItem = styled(NavListItem)`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: inherit;

  font-size: 0.875rem;

  text-decoration: none;
`;

const Header = () => {
  useLocation(); // force re-render on route change

  return (
    <HeaderWrapper>
      <Logo to='/'>Bravado</Logo>

      <Nav>
        <NavList>
          {isAuthenticated() ? (
            <Fragment>
              <NavListItem>
                <NavLink to='/artists'>Artists</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to='/tracks'>Tracks</NavLink>
              </NavListItem>
              <AuthNavListItem>
                <NavLink to='/' onClick={logOut}>
                  Log Out
                </NavLink>
              </AuthNavListItem>
            </Fragment>
          ) : (
            <AuthNavListItem>
              <NavLink to='/login'>Log In</NavLink>
            </AuthNavListItem>
          )}
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
