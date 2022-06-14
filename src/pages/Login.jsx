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
      <h2 className="text-4xl mb-5 text-white font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          className="p-2 rounded-md text-amber-500 caret-amber-500 bg-transparent shadow-neu focus:shadow-pressedNeu active:shadow-pressedNeu placeholder:text-amber-300"
          />

        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          className="p-2 rounded-md text-amber-500 caret-amber-500 bg-transparent shadow-neu focus:shadow-pressedNeu active:shadow-pressedNeu placeholder:text-amber-300"
        />

        <button className="rounded-md self-center text-amber-500 font-bold p-2 w-2/5 bg-transparent shadow-neu active:shadow-pressedNeu focus:shadowpressedNeu">log in</button>
        {error && <p>{error}</p>}
        <div className="text-white">Don't have an account yet? <Link to="/signup" className="text-amber-300">Sign up here</Link></div>
      </form>
    </div>
  );
}
