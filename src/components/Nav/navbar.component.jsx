import React,{useRef} from 'react';
import './navbar.styles.css'
import Logo from '../../assets/logo.png'


const Navbar = () => {

  const navRef = useRef();

  const showNavBar = () => 
  {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>        
        <nav ref={navRef}>
          <button onClick={showNavBar} type='button' className='nav-btn nav-close-btn'>
          <i className="bi bi-x-circle hover-circle"></i>
          </button>
          <a onClick={showNavBar} href="#Projects">About Me</a>
          <a onClick={showNavBar} href="#Projects">Projects</a>
          <a onClick={showNavBar} href="#Cert">Certificates</a>
        </nav>
        <button onClick={showNavBar} type='button' className='nav-btn p-3 f-4'>
            <div className='bars'>
            <div className='bar'>
              <div className='bar2'></div>
            </div>
            <div className='bar'>
            <div className='bar2'></div>
            </div>
            </div>
        </button>
        <a id='logo' href="#App">
            <img src={Logo} alt="Logo" />
        </a>
        <a href='#Contact' className='contact'>Contact Me</a>
    </header>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="/">Navbar</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //     <li className='nav-item active'><a className='nav-link' href='#Front End Web Projects'>Front End Projects</a></li>
    //             <li className='nav-item'><a className='nav-link' href='#Full Stack Projects'>Full Stack Projects</a></li>
    //             <li className='nav-item' ><a className='nav-link' href='#Pi Projects'>PI Projects</a></li>
    //             <li className='nav-item'><a className='nav-link' href='#Certificates'>Certificates</a></li>
    //             <li className='nav-item'><a className='nav-link' href='#Contact Links'>Contact Links</a></li>
    //       </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
