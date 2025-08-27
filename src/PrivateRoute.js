import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authGoogleContex } from "./autenticação";
import LoadingScreen from "./Portifolio/Carregamnetopage";

const PrivateRoute = () => {
  const { signed } = useContext(authGoogleContex);
  const { pathname } = useLocation();

  const [checking, setChecking] = useState(true); // controla se ainda estamos no "modo espera"

  useEffect(() => {
    // espera 3 segundos antes de decidir
    const timer = setTimeout(() => {
      setChecking(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Enquanto estamos no tempo de espera → mostra loading
  if (checking) {
    const isDashboard = pathname.includes("/dashboard");
    return (
      <LoadingScreen
        sx={{
          ...(!isDashboard && {
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }),
        }}
      />
    );
  }

  // Depois dos 3s → decide se redireciona ou mostra o app
  if (!signed) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
