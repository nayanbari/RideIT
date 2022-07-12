import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' exact element={<Login/>} />
        <Route path='/register' exact element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
