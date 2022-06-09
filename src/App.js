import { BrowserRouter, Routes, Route} from "react-router-dom";

// pages + components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";

// styles
import "./App.css";

function App() {

  return (

    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
  
}

export default App;
