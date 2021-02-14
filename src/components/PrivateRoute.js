import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NotFound from './NotFound';
import { isAuthenticated } from '../auth';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? children : <NotFound />)}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.object
};

export default PrivateRoute;
