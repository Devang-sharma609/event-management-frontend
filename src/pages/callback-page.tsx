import { useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router";

const CallbackPage: React.FC = () => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user) {
      const redirectPath = localStorage.getItem("redirectPath");
      if (redirectPath) {
        localStorage.removeItem("redirectPath");
        navigate(redirectPath);
      } else {
        navigate("/dashboard");
      }
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return <p>Processing login...</p>;
  }

  return <p>Completing login...</p>;
};

export default CallbackPage;
