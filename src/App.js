import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [Theme,setTheme] = useState('rgb(40, 41, 41)');
  return (
    <div style={{backgroundColor: Theme}} className="container">
      <div className="themeColor">
        <div onClick={() =>  setTheme(' rgb(0, 139, 139)')  }></div>
        <div onClick={() =>  setTheme(' rgb(4, 63, 90)')  }></div>
        <div onClick={() =>  setTheme(' rgb(117, 5, 161)')  }></div>
        <div onClick={() =>  setTheme(' rgb(185, 7, 31)')  }></div>
        <div onClick={() =>  setTheme(' rgb(212, 141, 7)')  }></div>
        <div onClick={() =>  setTheme(' rgb(109, 109, 109)')  }></div>
        <div onClick={() =>  setTheme(' rgb(40, 41, 41)')  }></div>
      </div>
      <div className="content">
        <h1>The easiest way to learn React</h1>
        <p>Learn in an interactive environment. Understand how React works not just how to build with React.</p>
        <a>Start Learning</a>
      </div>
      <img src={logo} />
    </div>
  );
}

export default App
