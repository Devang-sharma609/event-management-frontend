import { useAuth } from "@/contexts/auth-context";

interface UseRolesReturn {
  isLoading: boolean;
  roles: string[];
  isOrganizer: boolean;
  isAttendee: boolean;
  isStaff: boolean;
}

export const useRoles = (): UseRolesReturn => {
  const { user, isLoading } = useAuth();
  
  const userRole = user?.user_metadata?.role || '';
  const roles = userRole ? [`ROLE_${userRole}`] : [];
  
  const isOrganizer = userRole === 'ORGANIZER';
  const isAttendee = userRole === 'ATTENDEE';
  const isStaff = userRole === 'STAFF';

  return {
    isLoading,
    roles,
    isOrganizer,
    isAttendee,
    isStaff,
  };
};