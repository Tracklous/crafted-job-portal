import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LOGGED_USER_PATH_SESSION_STORAGE } from "../constants/App.config";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDetails } from "../models/User.types";

// Define the shape of your authentication context
interface AuthContextType {
  isAuthenticated: boolean;
  user: UserDetails | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: () => void;
  logout: () => void;
  appRootRoute: MutableRefObject<string>;
  updateCurrentUserTrigger: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component to wrap your application with
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const appRootRoute = useRef<string>("");
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("AuthProvider", { isAuthenticated, user });

  useEffect(() => {
    const userSession = sessionStorage.getItem(
      LOGGED_USER_PATH_SESSION_STORAGE
    );

    if (userSession) {
      setUser(JSON.parse(userSession));
      setIsAuthenticated(true);
      navigate(location.pathname, {
        replace: true,
      });
    }
  }, []);

  function updateCurrentUserTrigger() {
    const updatedUserData = JSON.parse(
      sessionStorage.getItem(LOGGED_USER_PATH_SESSION_STORAGE) || "null"
    ) as UserDetails;

    setUser(updatedUserData);
  }

  const login = () => {
    setIsAuthenticated(true);
    updateCurrentUserTrigger();
    navigate("/");
  };

  const logout = () => {
    sessionStorage.setItem(LOGGED_USER_PATH_SESSION_STORAGE, "");
    setUser(null);
    setIsAuthenticated(false);
    navigate("login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        appRootRoute,
        isAuthenticated,
        setIsAuthenticated,
        updateCurrentUserTrigger,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
