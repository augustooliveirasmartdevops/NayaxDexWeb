import { useReducer } from "react";
import { reducer } from "./reducer";
import { AuthContext } from "./context";
import { data } from "./data";
import P from "prop-types";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <AuthContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.prototype = {
  children: P.node.isRequired,
};
