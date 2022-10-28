import React, { useEffect, useState } from 'react';
import { UserContext } from './context';
import AppLayout from './components/AppLayout';
import Homepage from './Homepage';
import AllTodo from './AllTodo';
import RegistrationForm from './RegistrationForm';
import CreateTodo from './components/Todo/CreateTodo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { REGISTRATION_ROUTE, USER_INFO_REQUST_CONFIG } from './constants';
import { requestHelper } from './utility/helper';


import './App.scss';
function App() {

  const [user, setUser] = useState(null);

  const getUserInfo = async () => {
    const response = await requestHelper.makeRequest(USER_INFO_REQUST_CONFIG.url, USER_INFO_REQUST_CONFIG.method);
    setUser(response.data.user);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <AppLayout /> }>
                  <Route index element={ <Homepage /> }></Route>
                  <Route path={REGISTRATION_ROUTE} element={ <RegistrationForm /> }></Route>
                  <Route path="todos" element={ <AllTodo /> }></Route>
                  <Route path="todos/create" element= { <CreateTodo /> }></Route>
              </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
