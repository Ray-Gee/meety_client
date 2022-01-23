import './App.css';
import React from "react";
import { Route, Routes, useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js"
import Login from "./Login.js"
import Create from "./Create.js"
import Navbar from './Navbar';
import Detail from './Detail.js';
import MessagesIndex from './components/messages_index.js';

function App() {
  
  // const Routing = () => {
  //   let routes = useRoutes([
  //     { path: "/", element: <Home /> },
  //   ]);
  //   return routes;
  // };
console.log("hi");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Switch> */}
        <Route exact path="/messages" element={<MessagesIndex/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/create" element={<Create/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        {/* <Routing /> */}
        {/* </Switch> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
