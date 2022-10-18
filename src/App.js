import './App.scss';
import AppLayout from './components/AppLayout';
import Homepage from './Homepage';
import RegistrationForm from './RegistrationForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { REGISTRATION_ROUTE } from './constants';

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AppLayout /> }>
              <Route index element={ <Homepage /> }></Route>
              <Route path={REGISTRATION_ROUTE} element={ <RegistrationForm /> }></Route>
              <Route path="route-2" element={ <div>Route 2</div> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
