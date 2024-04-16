import React, { useState } from "react";
import { Stack, TextField, PrimaryButton, Text } from "@fluentui/react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    // Redirect to dashboard or any other authenticated route
    return <Navigate to="/dashboard" />;
  }

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "100%",
          height: "100vh",
          background: "#f3f2f1",
          padding: "2rem",
        },
      }}
      gap={15}
    >
      <Stack styles={{ root: { width: 300 } }} gap={15}>
        <Text variant="xLarge">Sign in to Microsoft Outlook</Text>
        <TextField
          label="Email or phone"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PrimaryButton text="Sign in" onClick={handleLogin} />
      </Stack>
    </Stack>
  );
};

export default Login;
