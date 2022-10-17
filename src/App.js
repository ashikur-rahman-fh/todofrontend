import './App.scss';
import { BASE_URL } from './constants';

function App() {
  
  return (
    <div className="App">
      <h1>Welcome-TODO</h1>
      <h2>{BASE_URL ? BASE_URL : 'Not set'}</h2>
    </div>
  );
}

export default App;
