import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../auth';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? children : <Redirect to='/login' />)}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.object
};

export default PrivateRoute;
