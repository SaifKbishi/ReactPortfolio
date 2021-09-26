import logo from './logo.svg';
import './App.css';
import Section from './components/Section';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
}

export default App;
