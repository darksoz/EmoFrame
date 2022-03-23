import './App.css';
import Header from './Components/Header/Header';
import Routes from './Routes'
import {defineInterceptor} from './services/api';

function App() {
  defineInterceptor();
  return (
    <div className="App">
      
        <Routes/>
        
    </div>
  );
}

export default App;
