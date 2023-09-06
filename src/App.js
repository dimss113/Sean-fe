import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
};

export default App;
