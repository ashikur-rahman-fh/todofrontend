import React, { useState } from 'react';
import { UserContext } from './context';
import AppLayout from './components/AppLayout';
import Homepage from './Homepage';
import RegistrationForm from './RegistrationForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { REGISTRATION_ROUTE } from './constants';

import './App.scss';
function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <AppLayout /> }>
                  <Route index element={ <Homepage /> }></Route>
                  <Route path={REGISTRATION_ROUTE} element={ <RegistrationForm /> }></Route>
                  <Route path="route-2" element={ <div>Route 2</div> }></Route>
              </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
