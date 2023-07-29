import './App.css';
import Navbar from './components/Nav/navbar.component';
import Home from './views/home.view';
import  me from './assets/me.jpg'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
        <Home/>
        <section id='Cert' className='certificate'>
            <h1>Certificates</h1>
            <img alt="react_certificate" src="https://udemy-certificate.s3.amazonaws.com/image/UC-34b666ea-841a-4763-99d5-44de59e0382c.jpg?v=1690118775000" ></img>
        </section>
        <section id='Resources' className='resources'>
          <p>Resources</p>
          <div className='resource-items'>
              <a href="/">CV</a>
              <a href="/">Matric Certificate</a>
              <a href="/">Latest Payslip</a>
              <a href="/">Latest Payslip</a>
          </div>
          
        </section>
    </div>
  );
}

export default App;
