import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calc from './components/Calc';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calc" exact element={<Calc />} />
        <Route path="/quote" exact element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
