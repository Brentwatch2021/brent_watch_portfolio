 const ExtractDataFromMarkdown = (datapointToExtract,rawMarkdown) => 
{
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    let match;
    let imageUrl = null;

    while((match = regex.exec(rawMarkdown)) !== null)
    {
        const [,alt,data] = match;

        if(alt.trim() === datapointToExtract.trim())
        {
            return data;
        }
    }
    return imageUrl;
}




export const GetGithubProjects = async () => {

    try {
        const response = await fetch('https://api.github.com/users/brentwatch2021/repos');
        const data = await response.json();
        const projects = data.map((repo) => {
                return {
                    name: ExtractDataFromMarkdown('Name',repo.description),
                    description:ExtractDataFromMarkdown('Description',repo.description),
                    repoLink:repo.html_url,
                    liveLink:repo.homepage,
                    projectImage: ExtractDataFromMarkdown('Main Demo',repo.description),
                    ShowOnPortfolio: ExtractDataFromMarkdown('ShowOnPortfolio',repo.description),
                    TechStack: ExtractDataFromMarkdown('TechStack',repo.description) ? ExtractDataFromMarkdown('TechStack',repo.description).trim().split(',') : [],
                }
        })
        return projects.filter((project) => project.ShowOnPortfolio === "Yes");
    }
    catch(error)
    {
        throw new Error('Unable To Get Github projects');
    }   
}