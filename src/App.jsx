import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Manifesto from './Components/Manifesto';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Manifesto />
        <Footer />
    </div>
  );
}

export default App;
