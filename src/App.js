import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import './App.css';
import Home from "./Navigation/Home"
import Login from "./Navigation/Login"
import New_Reg from "./Navigation/new_Reg";
import Upload from "./Navigation/Upload";
import View from "./Navigation/View"
import Blog from "./Navigation/Blog/Index_Blog"
import ChatGPTIntegration from "./Navigation/ai";
// import Viewer from "./Navigation/viewer";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <Link to ='/'><button  className="btn" >Home</button> </Link>
        <Link to="/ChatGPT"> <button className="btn">AI</button></Link>
        <Link to="/Blog"> <button className="btn"> Blog</button></Link>
        <Link to="/Upload"> <button className="btn"> Upload</button></Link>
        <Link to="/View"> <button className="btn"> View</button></Link>
        <Link to="/New_reg"> <button className="btn">New Registration</button> </Link>
        <Link to='/Login'> <button className="btn">Login</button> </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/ChatGPT' element={<ChatGPTIntegration/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/New_reg' element={<New_Reg/>}></Route>
          <Route path='/Upload' element={<Upload/>}></Route>
          <Route path='/View' element={<View/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
