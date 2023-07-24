import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import { GetGithubProjects } from './utils/api/github/github.api';

function App() {

  const [projects,setProjects] = useState([])

  const GetProjects = async () => {
    const projects = await GetGithubProjects();
    setProjects(projects);
  }

  useEffect(()=>{
   GetProjects()
  },[])


  return (
    <div className="App">
      <header className="App-header">
        {projects.map((project) => {
          return <> <p key={project.name}>{project.name}</p>
          {project.projectImage && <img src={project.projectImage} alt={project.projectImage}></img>}
          </>;
        })}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
