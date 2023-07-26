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
        <div className="heatshield-container">
                <svg className="hexagon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75 0 L129 37.5 H129.9 L150 75 L129.9 112.5 H129.9 L75 150 L20.1 112.5 H20.1 L0 75 L20.1 37.5 H20.1 Z" />
                </svg>
                <div className="content">
                    <span>{props.name}</span>
                    {/* <img src={props.imageUrl} alt={props.name} /> */}
                    <p>{props.description}</p>
                    <div>
                        <button type="button" className="btn btn-danger" onClick={handleRedPillLinkHandler}>Code</button>
                        <button type="button" className="btn btn-primary" onClick={handleBluePillLinkHandler}>Demo</button>
                    </div>
                </div>
        </div>
    );
}

export default Card;