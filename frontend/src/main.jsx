import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: {},
  setUser: () => {},
  capsules: [],
  setCapsules: () => {},
});
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [capsules, setCapsules] = useState([]);
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        capsules,
        setCapsules,
      }}
    >
      <App />
    </Context.Provider>
  );
};


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AppWrapper />
  </StrictMode>
);
