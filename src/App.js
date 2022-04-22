import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Personal from './components/Personal';

function App() {
  return (
    <div className="App">
      <h1>CURRICULUM VITAE</h1>
      <Personal />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
