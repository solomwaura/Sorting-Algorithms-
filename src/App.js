import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Routes
  

} from "react-router-dom";
import Base from './pages/Base';
import Path from './pages/Path';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base/>}></Route>
        <Route path="/path" element={<Path />}></Route>
        <Route path="/nqueen" element={<Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
