import './App.css';
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
