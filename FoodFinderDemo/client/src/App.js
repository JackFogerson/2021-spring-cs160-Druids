import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Friends from './routes/Friends';
import SearchPage from './routes/SearchPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const checkLoggedIn = () => {
        if (localStorage.getItem("token") !== null) {
            setLoggedIn(true);
            return true;
        } else {
            setLoggedIn(false);
            return false;
        }
    };

    return (
        <Router>
            <Nav setLoggedIn={setLoggedIn} setUser={setUser} user={user}/>
            <Switch>
                <Route exact path="/" render={ () => (
                    checkLoggedIn() ? (
                        <Redirect to="/dashboard" />
                    ) : (
                        <Redirect to="/login" />
                    )
                )} />
                <Route path="/dashboard" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/friends" exact component={Friends}></Route>
                <Route path="/search" exact component={SearchPage}></Route>
            </Switch>   
        </Router>
    );
}

export default App;
