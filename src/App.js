import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/register' exact element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
