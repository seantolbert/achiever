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
      <h2 className="text-4xl mb-5 text-white font-bold">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-2 rounded-md text-amber-500 caret-amber-500 bg-transparent shadow-neu focus:shadow-pressedNeu active:shadow-pressedNeu placeholder:text-amber-300"
            placeholder="email"
            />
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-2 rounded-md text-amber-500 caret-amber-500 bg-transparent shadow-neu focus:shadow-pressedNeu active:shadow-pressedNeu placeholder:text-amber-300"
            placeholder="password"
          />
          <input
            type="password"
            required
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            className="p-2 rounded-md text-amber-500 caret-amber-500 bg-transparent shadow-neu focus:shadow-pressedNeu active:shadow-pressedNeu placeholder:text-amber-300"
            placeholder="confirm password"
            
          />
        <button disabled={disable} className="rounded-md self-center text-amber-500 font-bold p-2 w-2/5 bg-transparent shadow-neu active:shadow-pressedNeu focus:shadowpressedNeu">sign up</button>
        {error && <p>{error}</p>}
        <div className="text-white">Already have an account? <Link to="/login" className="text-amber-300">Log in here</Link></div>
      </form>
    </div>
  );
}
