import { useState } from "react";
import useScrollEvent from "../../hooks/useScrollEvent";

const ScrollToTop = () => 
{
    const [isScrollVisibile,setScrollVisible] = useState(false);

    const handleTopButton = (isVisible) => {
        setScrollVisible(isVisible);       
    }
    //const projectsRef = document.getElementById('Cert');

    useScrollEvent(handleTopButton);

    return (
        <>
        {isScrollVisibile ? 
            (<a className='backToTop' href="#App"><i className="bi bi-arrow-up-circle-fill"></i></a>
            ) : null}
        </>
    );
}

export default ScrollToTop;