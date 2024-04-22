import { useState } from "react";

const AdminLogin = ({ checkPass }) => {
  const [pass, setPass] = useState("");
 
  const handleClick = () => {
    checkPass(pass);
  };
  return (
    <div className="admin-login">
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>Admin</button>
 
    </div>
  );
};

export default AdminLogin;
