import React from "react";
import { Button } from "@mui/material";
import useAuth from "../AuthProvider/useAuth";
const Login = () => {
  const { googlesign } = useAuth();
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login_text">
          <h1>Sign in</h1>
        </div>
        <Button onClick={googlesign}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
