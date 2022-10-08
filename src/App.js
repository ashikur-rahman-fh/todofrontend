import logo from './logo.svg';
import './App.css';

function App() {
  const domain = process.env.REACT_APP_BACKEND_DOMAIN;
  
  return (
    <div className="App">
      <h1>Welcome-TODO</h1>
      <h2>{domain ? domain : 'Not set'}</h2>
    </div>
  );
}

export default App;
