import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Login from './login';
import Signup from './Signup';
import { Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/signup' Component={Signup}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />

    </>
  );

};

export default App;
