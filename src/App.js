import './App.css';
import Calc from './components/Calc';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Calc />
      <Quote />
    </div>
  );
}

export default App;
