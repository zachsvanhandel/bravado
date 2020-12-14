import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../auth';

const PublicRoute = ({ restricted, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        restricted && isAuthenticated() ? (
          <Redirect to='/dashboard' />
        ) : (
          children
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  children: PropTypes.node,
  rest: PropTypes.object
};

export default PublicRoute;
