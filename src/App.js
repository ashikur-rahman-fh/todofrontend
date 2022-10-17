import './App.scss';
import AppLayout from './components/AppLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AppLayout /> }>
              <Route index element={ <div>Home</div> }></Route>
              <Route path="route-1" element={ <div>Route 1</div> }></Route>
              <Route path="route-2" element={ <div>Route 2</div> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
