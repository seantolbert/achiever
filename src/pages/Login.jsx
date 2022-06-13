import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-5">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          className="p-2 rounded-md text-gray-600"
          />

        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          className="p-2 rounded-md text-gray-600"
        />

        <button>log in</button>
        {error && <p>{error}</p>}
        <div>Don't have an account yet? <Link to="/signup" className="text-teal-300">Sign up here</Link></div>
      </form>
    </div>
  );
}
