import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../auth';
import { useLoginRedirectQueryParam } from '../hooks';

const PublicRoute = ({ restricted, children, ...rest }) => {
  const redirect = useLoginRedirectQueryParam() || '/dashboard';

  return (
    <Route
      {...rest}
      render={() =>
        restricted && isAuthenticated() ? <Redirect to={redirect} /> : children
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
