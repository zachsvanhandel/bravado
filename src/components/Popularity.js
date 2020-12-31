import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const PopularityBar = styled.div`
  margin-left: 0.125rem;
  height: 1rem;
  width: 0.125rem;
  background-color: ${(props) =>
    props.$isFilled ? props.theme.colors.secondary : props.theme.colors.light};
`;

const Popularity = ({ score }) => {
  return (
    <Wrapper>
      {[...Array(10)].map((ignored, index) => (
        <PopularityBar key={index} $isFilled={score >= index * 10} />
      ))}
    </Wrapper>
  );
};

Popularity.propTypes = {
  score: PropTypes.number.isRequired
};

export default Popularity;
