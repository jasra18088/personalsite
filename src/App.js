import logo from './logo.svg';
import './App.css';
import ProjectBox from './components/ProjectBox';
import ProjectBoxContainer from './components/ProjectBoxContainer';
import testImage from './logo.svg'

function App() {

  const projectList = [
    { id: '1', title: 'Project 1', image: testImage },
    { id: '2', title: 'Project 2', image: testImage },
    { id: '3', title: 'Project 3', image: testImage },
    { id: '4', title: 'Project 4', image: testImage },
  ]
  return (
    <div className="App">
      <header className="App-header">
      <ProjectBoxContainer projects={projectList} />
      </header>
    </div>
  );
}

export default App;
