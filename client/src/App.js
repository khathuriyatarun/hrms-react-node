import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch, useLocation  } from 'react-router-dom';
import Layout from './layouts/Layout';
import Sidebar from './components/Sidebar'
import Users from './pages/Users'
import AddUser from './pages/AddUser';
import Login from './pages/Login';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const location = useLocation();  

  

  useEffect(() => {
    if(location.pathname === '/login'){
      setIsLoggedin(false);
    }else{
      setIsLoggedin(true);
    }
  }, [location])

  return (
    <Layout>
      {
        isLoggedin ? <Sidebar></Sidebar> : ''
      }
      <div className='main'>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/users/add'>
            <AddUser />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
