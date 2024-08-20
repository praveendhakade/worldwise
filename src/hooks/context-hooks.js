import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CitiesContext } from "../contexts/CitiesContext";

export const useCities = () => {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error("Context use outside the provider")
    return context;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined)
      throw new Error("AuthContext was used outside the provider");
    return context;
  };