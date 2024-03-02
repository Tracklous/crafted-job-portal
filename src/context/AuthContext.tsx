import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { LOGGED_USER_PATH_SESSION_STORAGE } from "../constants/App.config";
import { useNavigate } from "react-router-dom";

// Define the shape of your user object
interface User {
  username: string;
  email: string;
}

// Define the shape of your authentication context
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
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
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  console.log("AuthProvider", { isAuthenticated });

  useEffect(() => {
    const userSession = sessionStorage.getItem(
      LOGGED_USER_PATH_SESSION_STORAGE
    );

    if (userSession) {
      navigate("/");
      setUser(JSON.parse(userSession));
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    // Implement your logout logic here
    // For demonstration purposes, let's just clear the user
    sessionStorage.setItem(
      LOGGED_USER_PATH_SESSION_STORAGE,""
    );
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, logout, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
