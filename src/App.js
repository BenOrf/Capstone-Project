import './App.css';
import Header from './components/Header';
import Base from './components/Base';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Base/>
      <Navigation/>
    </Router>
  );
}

export default App;