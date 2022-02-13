import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js"
import Login from "./Login.js"
import Create from "./Create.js"
import Navbar from './Navbar';
import Detail from './Detail.js';
// import { MessagesContainer } from './containers/Messages/index.js';
// import {gRPCClients} from "./gRPCClients.js"

function App() {
  
  // const Routing = () => {
  //   let routes = useRoutes([
  //     { path: "/", element: <Home /> },
  //   ]);
  //   return routes;
  // };
  return (
    <BrowserRouter>
    <h1>hi</h1>
      <Navbar />
      <Routes>
        {/* <Route exact path="/chat" element={<MessagesContainer clients={gRPCClients} />} /> */}
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/create" element={<Create/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
