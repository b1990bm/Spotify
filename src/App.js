import React from 'react';
import MainContainer from './Components/MainContainer';
import LeftMenu from "./Components/LeftMenu";
import RightMenu from './Components/RightMenu';
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
};

export default App;