import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages + components
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";

// styles
import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/create"
              element={user ? <Create /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
