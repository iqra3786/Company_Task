import './App.css';
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from './components/home'
import Task from './components/task'
import GetTask from './components/getTask';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/task/all" element={<GetTask/>}></Route>
          {/* <Route path="/blog/all" element={<Blog />}></Route>
          <Route path="/blog/create" element={<CreateBlog />}></Route>
          <Route path="/image" element={<ImageCompressor />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;