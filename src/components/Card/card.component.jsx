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
        
          
            
              <div className="custom-card">
                <div className="content">
                      <span>{props.name}</span>
                          {props.imageUrl && <img className="demoImage" src={props.imageUrl} alt={props.name} />}
                          
                          <div className="redpillbluepill">
                            <button type="button" className="btn btn-danger" onClick={handleRedPillLinkHandler}>Code</button>
                            <button type="button" className="btn btn-primary" onClick={handleBluePillLinkHandler}>Demo</button>
                          </div>
                </div>
              </div>
        
    );
}

export default Card;