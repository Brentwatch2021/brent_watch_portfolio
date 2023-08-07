import './App.css';
import Navbar from './components/Nav/navbar.component';
import Home from './views/home.view';
import  me from './assets/me.png'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CV from './assets/CV.pdf';
import { Suspense } from 'react';
// import Payslip from './assets/Payslip.pdf';

function App() {
  
  return (
    <div id='App' className="App">
      <ScrollToTop/>
       <Navbar/>
       <section id='Intro'>
       <div className='intro-description'>
          Hi I'm Brent A Coder see my skills and latest projects below
        </div>
        <div className='profileContainer'>
          <div className='profileImage'>
            <img className='meimg' src={me} alt="Im Brent A programmer" />
          </div>
          
          <div className='experienceContainer'>
            <span className='years'>4+</span>
            <span className='yearstext'>Years Experience</span>  
          </div>
        </div>
        
       </section>
       <section id='Software-Skills'>
       <div className='skills'>
          <article>
            <span className='front-end-skill'>HTML</span>
            <span className='front-end-skill'>CSS</span>
            <span className='front-end-skill'>JS</span>
            <span className='front-end-skill'>React</span>
            <span className='front-end-skill'>Redux</span>
          </article>
          <br></br>
          <article>
            <span className='back-end-skill'>C#</span>
            <span className='back-end-skill'>Net Core</span>
            <span className='back-end-skill'>EF Core</span>
            <span className='back-end-skill'>MSSQL</span>
          </article>
        </div>
       </section>
        
        <br></br>
        <br></br>
        <section id='Projects'>
          <Suspense fallback={<div>Loading...</div>}>
            <Home/>
          </Suspense>
        </section>
       
        <br />
        <br />
        <br />
        <br />
        <section id='Cert' className='certificate'>
            <h1>Certificates</h1>
            <img alt="react_certificate" src="https://udemy-certificate.s3.amazonaws.com/image/UC-34b666ea-841a-4763-99d5-44de59e0382c.jpg?v=1690118775000" ></img>
        </section>
         
        <section id='Contact' className='resources'>
          <div id='ContactContent'>
            <p>Contact</p>
            <div className='contact-items'>
              <a title='LinkedInProfile' className='m-2' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/brent-becker-48337b26a/"><i className="bi bi-linkedin contacthover"></i></a>
              <a title='Github Account' className='m-2' target='_blank' rel='noreferrer' href="https://github.com/Brentwatch2021"><i className="bi bi-github"></i></a>
              <a title='Call Me' className='m-2' target='_blank' rel='noreferrer' href="tel:0647838587"><i className="bi bi-telephone-fill"></i></a>
              <a title='Whats App Me' className='m-2' target='_blank' rel='noreferrer' href="https://wa.me/27647838587"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
          <div id='download'>
              <div className='resource-items m-5'>
                  <p>Download CV</p>
                  <a className='m-5' href={CV} download="CV" target='_blank' rel="noreferrer" title='CV'><i className="bi bi-file-earmark-person-fill"></i></a>
              </div>
          </div>
        </section> 

        <footer>
        <p className='copyright'>Copyright © 2023 Brent Watch Portfolio.</p> 
          <p className='copyright'>All rights reserved.</p>
        </footer>
        
    </div>
  );
}

export default App;
