import React from 'react';
import Header from './components/Header'; 
import Wrapper from "./components/Wrapper"; 
import UserContainer from './components/UserContainer';
import './App.css';

function App() {
  return (
    <div className="App"> 
    <Wrapper>
     <Header />  
     <UserContainer/>
     </Wrapper>
    </div>
  );
}

export default App;
