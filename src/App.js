import './App.css';
import React from "react";
import { Route, Routes, useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js"
import Books from "./Books.js"
import Navbar from './Navbar';

function App() {
  
  // const Routing = () => {
  //   let routes = useRoutes([
  //     { path: "/", element: <Home /> },
  //   ]);
  //   return routes;
  // };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Switch> */}
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/create" element={<Books/>} />
        {/* <Routing /> */}
        {/* </Switch> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
