import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import './App.css';
import Home from "./Navigation/Home"
import Login from "./Navigation/Login"
import New_Reg from "./Navigation/new_Reg";
import Upload from "./Navigation/Upload";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to ='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to="/New_reg">New Registration</Link>
        <Link to="/Update">Upload</Link>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/New_reg' element={<New_Reg/>}></Route>
          <Route path='/Upload' element={<Upload/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
