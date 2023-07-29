import { useEffect, useState } from "react";
import { GetGithubProjects } from "../utils/api/github/github.api";
import Card from "../components/Card/card.component";
import './home.styles.css';

const Home = () => {

    const [githubProjects,setGithubProjects] = useState([]);

    useEffect(() => {

        const fetchGithubProjects = async () => {
            try
            {
                const projects = await GetGithubProjects();
                if(projects)
                {
                    setGithubProjects(projects);
                }
            }
            catch(error)
            {
                console.log(`Error occured: ${error}`);
            }
        }

        fetchGithubProjects();

    },[])



    return (
        <div id="Projects" className="HomeContainer Container">
        {githubProjects.map((project, index) => (
          <Card
            key={index} 
            name={project.name}
            imageUrl={project.projectImage}
            description={project.description}
            githubRepoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    )}

export default Home;