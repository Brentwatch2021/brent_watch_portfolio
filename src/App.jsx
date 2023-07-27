import './App.css';
import Navbar from './components/Nav/navbar.component';
import Home from './views/home.view';
import  me from './assets/me.jpg'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <section className='intro'>
        <div className='intro-heading'>
          <h1>Hi I am Brent A programmer</h1>
          <img className='meimg' src={me} alt="me" />
        </div>
        <div className='intro-description'>
          I have over 4 years experience in C# and recently upskilled my self in React and Angular.
          See my projects I have  completed below.
        </div>
       </section>
        <Home/>
    </div>
  );
}

export default App;
