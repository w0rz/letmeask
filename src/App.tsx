import React from 'react';
import { Home } from "./pages/Home";
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {

  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
