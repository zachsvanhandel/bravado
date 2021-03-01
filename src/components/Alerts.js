import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Container as ContainerStyle } from '../styles';
import { removeAlert } from '../actions/alerts';

const Container = styled(ContainerStyle)`
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
`;

const Alert = styled.div`
  margin-bottom: 1rem;
  border: 0.125rem solid ${(props) => props.theme.colors.dark};

  ${(props) => props.theme.breakpoints.sm`
    width: 400px;

    margin-left: auto;
  `}
`;

const Heading = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.dark};

  padding: 0.25rem 0.5rem;
  border-bottom: 0.125rem solid ${(props) => props.theme.colors.dark};
`;

const Type = styled.div`
  font-size: 0.875rem;
  font-weight: 600;

  text-transform: uppercase;
`;

const CloseButton = styled.button`
  ${(props) => props.theme.mixins.unstyledButton}

  margin-left: auto;
`;

const Message = styled.div`
  background-color: ${(props) => props.theme.colors.white};

  padding: 0.5rem;
`;

const Alerts = ({ alerts, removeAlert }) => {
  return (
    <Container>
      {alerts.map((alert) => (
        <Alert key={alert.timestamp}>
          <Heading>
            <Type>{alert.type}</Type>

            <CloseButton onClick={() => removeAlert(alert.timestamp)}>
              <FontAwesomeIcon icon={['fas', 'times']} />
            </CloseButton>
          </Heading>
          <Message>{alert.message}</Message>
        </Alert>
      ))}
    </Container>
  );
};

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alerts
});

export default connect(mapStateToProps, { removeAlert })(Alerts);
