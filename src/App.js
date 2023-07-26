import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import { GetGithubProjects } from './utils/api/github/github.api';
import Navbar from './components/Nav/navbar.component';
import Home from './views/home.view';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
