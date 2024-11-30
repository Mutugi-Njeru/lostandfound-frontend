import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, storeToken } from "../service/ApiService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const auth = btoa(username + ":" + password);

    try {
      const response = await loginUser(auth);
      const token = "Bearer " + response.data.message.accessToken;
      console.log(token);
      storeToken(token);
    } catch (error) {
      console.error("Login failed", error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-green-500 to-black">
      <div className="bg-white p-6 rounded-md shadow-md w-80">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
