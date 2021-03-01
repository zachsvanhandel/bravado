import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Main } from '../styles';

const Header = styled.header`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.5rem;

  ${(props) => props.theme.breakpoints.sm`
    flex-direction: row;
    align-items: center;
  `}
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;

  text-align: center;

  margin-top: 0;
  margin-bottom: 0.875rem;

  ${(props) => props.theme.breakpoints.sm`
    margin-bottom: 0;
  `}
`;

const RangeGroup = styled.ul`
  ${(props) => props.theme.mixins.unstyledList}

  display: flex;

  text-align: center;

  border: 0.0625rem solid ${(props) => props.theme.colors.dark};

  ${(props) => props.theme.breakpoints.sm`
    margin-left: auto;
  `};
`;

const RangeItem = styled.li`
  flex: auto;

  ${(props) => props.theme.breakpoints.sm`
    flex: unset;
  `}
`;

const RangeLink = styled(Link)`
  display: block;

  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.dark};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.dark : props.theme.colors.white};

  font-size: 0.875rem;
  font-weight: 600;

  text-decoration: none;
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.dark};
`;

const PageLayout = ({ title, links, isActiveLink, children }) => {
  return (
    <Main>
      <Header>
        <Title>{title}</Title>

        <RangeGroup>
          {links.map((link, index) => (
            <RangeItem key={index}>
              <RangeLink $isActive={isActiveLink(link)} to={link.url}>
                {link.text}
              </RangeLink>
            </RangeItem>
          ))}
        </RangeGroup>
      </Header>

      {children}
    </Main>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  isActiveLink: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default PageLayout;
