import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import { GetGithubProjects } from './utils/api/github/github.api';
import Navbar from './components/navbar.component';

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
       <Navbar/>
   
      
      {/* {projects.map((project) => {
          return <> <p key={project.name}>{project.name}</p>
          {project.projectImage && <img src={project.projectImage} alt={project.projectImage}></img>}
          </>;
        })} */}
    </div>
  );
}

export default App;
