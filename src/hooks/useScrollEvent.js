import { useEffect } from "react";

const useScrollEvent = (callback) => {
    useEffect(() => {
        const handleScroll = () => {
            const { scrollY } = window;
            if(scrollY > 300 && callback && typeof callback === 'function')
            {
                // introduce context and establish if you we need to initiate the 
                // callback to either display
                callback(true);
            }
            else if(scrollY < 300)
            {
                callback(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

        // Intersection API
        // const IntersectionObserverCallback = (entries, observer) =>
        // {
        //     // If an element comes into view it will intersect
        //     entries.forEach(element => {
        //         if(element.isIntersecting)
        //         {
        //             // execute component callback
        //             componentCallback();
        //         }
        //         else
        //         {
        //             // execute component callback
        //             componentCallback();
        //         }
        //     });
        // }

        // let observer = new IntersectionObserver(IntersectionObserverCallback);
        // observer.observe(target);


    },[callback])
}

export default useScrollEvent;