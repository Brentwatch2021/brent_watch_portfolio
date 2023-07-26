import './App.css';
import Navbar from './components/Nav/navbar.component';
import Home from './views/home.view';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
