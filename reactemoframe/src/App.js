import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
