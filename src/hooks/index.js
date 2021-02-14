import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useLoginLocation = () => {
  const { pathname, search, hash } = useLocation();
  const loc = pathname + search + hash;

  if (pathname === '/') {
    return '/login';
  } else if (pathname === '/login') {
    return loc;
  }

  return `/login?redirect=${encodeURIComponent(loc)}`;
};

export const useLoginRedirectQueryParam = () => {
  const { pathname } = useLocation();
  const redirect = useQuery().get('redirect');

  if (pathname === '/login' && redirect) {
    return decodeURIComponent(redirect);
  }

  return null;
};
