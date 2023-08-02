import { useCallback } from "react";
import './card.styles.css'
const Card = (props) => {

    const handleRedPillLinkHandler = useCallback(() => {
        window.open(props.githubRepoLink,'_blank');
    },[props.githubRepoLink]);

    const handleBluePillLinkHandler = useCallback(() => {
        window.open(props.liveLink,'_blank');
    },[props.liveLink]);

    return (
            //   <div className="custom-card">
            //     <div className="content">
            //               <span>{props.name}</span>
            //               {/* {props.imageUrl && <img className="demoImage" src={props.imageUrl} alt={props.name} />} */}
            //               <div className="redpillbluepill">
            //               {props.githubRepoLink ? <button type="button" className="btn redpill" onClick={handleRedPillLinkHandler}>Code</button>: null} 
            //               {props.liveLink ? <button type="button" className="btn bluepill" onClick={handleBluePillLinkHandler}>Demo</button> : null} 
            //               </div>
            //     </div>
            //   </div>
            <div className="mainContainer">
                <div className="mainDemo">
                    {props.imageUrl && <img className="demoImage" src={props.imageUrl} alt={props.name} />}
                </div>
                <div>
                    <span>{props.name}</span>
                    <div className="greatLinks">
                    {props.githubRepoLink ? <i onClick={handleRedPillLinkHandler} title="Github Repo" className="bi bi-github"></i>: null} 
                    {props.liveLink ? <i onClick={handleBluePillLinkHandler} title="Live Link" className="bi bi-globe"></i> : null} 
                    </div>
                </div>
            </div>
        
    );
}

export default Card;