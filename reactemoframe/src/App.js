import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routes from './Routes'
import {defineInterceptor} from './services/api';

function App() {
  defineInterceptor();
  return (
    <div className="App">
      <Header/>
        <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
