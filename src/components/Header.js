import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  display: flex;
  align-items: center;

  margin-left: auto;
`;

const NavList = styled.ul`
  display: flex;

  margin-top: 0;
  margin-bottom: 0;
`;

const NavListItem = styled.li`
  margin-left: 0.75rem;
`;

const NavLink = styled(Link)`
  color: inherit;

  font-size: 0.875rem;

  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to='/'>Bravado</Logo>

      <Nav>
        <NavList>
          <NavListItem>
            <NavLink to='/login'>Log In</NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
