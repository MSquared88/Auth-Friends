import React from 'react';
import './App.css';

//router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//components
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login.jsx'
import FriendsList from './components/FriendsList'
import UpdateFriend from './components/UpdateFriend'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/login' component={Login} />
        <ProtectedRoute exact path='/friendsList' component={FriendsList} />
        <Route exact path='/friendsList/:id/edit' component={UpdateFriend}/>
      </div>
    </Router>
  );
}

export default App;
