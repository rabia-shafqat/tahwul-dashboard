import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const [activeScreen, setActiveScreen] = useState<string>("/");

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const onScreenChange = (redirectUrl: string) => {
    navigate(redirectUrl);
  };

  useEffect(() => {
    setActiveScreen(pathname);
  }, [pathname]);

  return {
    activeScreen,

    onScreenChange,
  };
};
