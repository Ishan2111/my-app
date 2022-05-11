import React from "react";
// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='*' element={<NotFound />} />
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/edit/:id" element={<EditUser />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;