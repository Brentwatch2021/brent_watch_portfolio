 const ExtractUrlFromMarkdown = (targetImageAltText,rawMarkdown) => 
{
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    let match;
    let imageUrl = null;

    while((match = regex.exec(rawMarkdown)) !== null)
    {
        const [,alt,url] = match;

        if(alt.trim() === targetImageAltText.trim())
        {
            imageUrl = url;
            break;
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
                name: repo.name,
                description:repo.description,
                repoLink:repo.html_url,
                liveLink:repo.homepage,
                projectImage: ExtractUrlFromMarkdown('Main Demo',repo.description),
            }
        })
        console.log('Processed some projects:')
        console.log(projects);
        return projects;
    }
    catch(error)
    {
        throw new Error('Unable To Get Github projects');
    }   
}