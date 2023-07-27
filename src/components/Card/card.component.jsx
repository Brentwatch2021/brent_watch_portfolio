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
        <div className="card-animation" style={{position: 'relative', width: '500px', height: '500px' }} >
        <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <polygon className="three-d-polygon" points="150,25 275,75 275,225 150,275 25,225 25,75" fill="#666666" />
        
        </svg>
        <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
          <div className="content text-center">
            <span>{props.name}</span>
            {props.imageUrl && <img className="demoImage" src={props.imageUrl} alt={props.name} />}
            {/* <p className="d-inline">{props.description}</p> */}
            <div className="redpillbluepill">
              <button type="button" className="btn btn-danger" onClick={handleRedPillLinkHandler}>Code</button>
              <button type="button" className="btn btn-primary" onClick={handleBluePillLinkHandler}>Demo</button>
            </div>
          </div>
        </div>
      </div>

      
    );
}

export default Card;