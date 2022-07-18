import { useGetCurrentUserRole } from './useGetCurrentUserRole';
import { Navigate } from 'react-router';
export const useRedirectToPortal = redirectPath => {
  const currentUserRole = useGetCurrentUserRole();
  return <Navigate to={`${currentUserRole}/${redirectPath}`} />;
};
