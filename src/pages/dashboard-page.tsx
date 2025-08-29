import { useRoles } from "@/hooks/use-roles";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const DashboardPage: React.FC = () => {
  const { isLoading, isOrganizer, isStaff } = useRoles();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isOrganizer) {
      navigate("/dashboard/events");
      return;
    }

    if (isStaff) {
      navigate("/dashboard/validate-qr");
      return;
    }

    navigate("/dashboard/tickets");
  }, [isLoading, isOrganizer, isStaff, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>Redirecting...</p>;
};