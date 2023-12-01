import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
