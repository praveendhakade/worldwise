import { createContext,  useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }

        case "logout":
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }

        default:
            throw new Error("Unknown action dispatched")
    }
}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty123@1",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

const AuthProvider = (prop) => {
  const { children } = prop;

  const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
        dispatch({type: "login", payload: FAKE_USER})
    }
  }

  const logout = () => {
    dispatch({type: "logout"})
  }
  
  return <AuthContext.Provider value={{
    user, isAuthenticated, login, logout
  }}
  >
    {children}
    </AuthContext.Provider>;
};



export default AuthProvider ;
