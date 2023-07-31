import './App.css';
import Navbar from './components/Nav/navbar.component';
import Home from './views/home.view';
import  me from './assets/me.jpg'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CV from './assets/CV.pdf';
import { Suspense } from 'react';
// import Payslip from './assets/Payslip.pdf';

function App() {
  
  return (
    <div id='App' className="App">
      <ScrollToTop/>
       <Navbar/>
       <section id='Intro' className='intro'>
        <div className='intro-heading'>
          <h1>Hi I am Brent A Programmer</h1>
          <img className='meimg' src={me} alt="Im Brent A programmer" />
        </div>
        <div className='intro-description'>
          I have over 4 years experience in C# and recently upskilled my self in React and Angular.
          See my projects I have  completed below.
        </div>
       </section>
       <Suspense fallback={<div>Loading...</div>}>
          <Home/>
       </Suspense>
        
        <section id='Cert' className='certificate'>
            <h1>Certificates</h1>
            <img alt="react_certificate" src="https://udemy-certificate.s3.amazonaws.com/image/UC-34b666ea-841a-4763-99d5-44de59e0382c.jpg?v=1690118775000" ></img>
        </section>
        <section id='Resources' className='resources'>
          <p>Resources</p>
          <div className='resource-items m-5'>
              Download CV: <a className='m-5' href={CV} download="CV" target='_blank' rel="noreferrer" title='CV'><i className="bi bi-file-earmark-person-fill"></i></a>
              {/* <a className='m-5' href={Payslip} download="Payslip" title='Payslip'><i className="bi bi-wallet2"></i></a> */}
          </div>
        </section>
        <section id='Contact' className='resources'>
          <p>Contact</p>
          <div className='contact-items'>
              <a className='m-2' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/brent-becker-48337b26a/"><i className="bi bi-linkedin"></i></a>
              <a className='m-2' target='_blank' rel='noreferrer' href="https://github.com/Brentwatch2021"><i className="bi bi-github"></i></a>
              <a className='m-2' target='_blank' rel='noreferrer' href="tel:0647838587"><i className="bi bi-telephone-fill"></i></a>
              <a className='m-2' target='_blank' rel='noreferrer' href="https://wa.me/27647838587"><i className="bi bi-whatsapp"></i></a>
          </div>
          <p className='copyright'>Copyright © 2023 Brent Watch Portfolio.</p> 
          <p className='copyright'>All rights reserved.</p>
        </section>
        
    </div>
  );
}

export default App;
