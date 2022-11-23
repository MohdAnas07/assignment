import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./component/auth/Login";
import Dashboard from './component/auth/Dashboard';
import ForgotPassword from './component/auth/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;



              // <Route exact path="/" component={Signup} />

// <Route path="/signup" component={Signup} />
              // <Route path="/forgot-password" component={ForgotPassword} />