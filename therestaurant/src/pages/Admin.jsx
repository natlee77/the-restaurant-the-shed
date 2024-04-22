import { useState, useEffect, useContext } from "react";
import { ExplorerContext } from "../contexts/context";
import { checkAdmin } from "../utilities/localUtils";

import AdminLogin from "../components/Admin/AdminLogin";
import AdminPage from "../components/Admin/AdminPage";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  const { web3 } = useContext(ExplorerContext);
  useEffect(() => {
    if( web3 && web3.account ) setIsLogged(true)
  }, [web3])

  const checkPass = (pass) => {
    if (checkAdmin(pass)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <div className="admin-order container">
      {isLogged ? (
          <div className="admin">
          {isAdmin ? (
            <AdminPage /> 
          ) : (
            <AdminLogin checkPass={checkPass} />
          )}
        </div>
        ) : (
          <div className="mm-msg">
            Connect to Metamask.
          </div>
        )}
    </div>
  );
};

export default Admin;
