import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Main as MainStyle } from '../styles';

const Main = styled(MainStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.tertiary};
`;

const Loading = () => {
  return (
    <Main>
      <LoadingIcon icon={['fas', 'circle-notch']} spin size='lg' />
    </Main>
  );
};

export default Loading;
