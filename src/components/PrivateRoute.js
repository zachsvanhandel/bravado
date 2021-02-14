import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../auth';
import { useLoginLocation } from '../hooks';

const PrivateRoute = ({ children, ...rest }) => {
  const loginLocation = useLoginLocation();

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated() ? children : <Redirect to={loginLocation} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.object
};

export default PrivateRoute;
