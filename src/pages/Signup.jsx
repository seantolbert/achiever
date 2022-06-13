import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    signup(email, password);
    setEmail("");
    setPassword("");
  };

  const disable = password !== password2 
  

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-5">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-2 rounded-md text-gray-600"
            placeholder="email"
            />
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-2 rounded-md text-gray-600"
            placeholder="password"
          />
          <input
            type="password"
            required
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            className="p-2 rounded-md text-gray-600"
            placeholder="confirm password"
            
          />
        <button disabled={disable}>sign up</button>
        {error && <p>{error}</p>}
        <div>Already have an account? <Link to="/login" className="text-teal-300">Log in here</Link></div>
      </form>
    </div>
  );
}
