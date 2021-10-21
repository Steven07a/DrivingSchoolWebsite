import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import AuthPage from "./pages/Auth";
import Dash from "./pages/Dash";

export default function App() {

    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="content">
                    <Switch>
                        {/**TODO: Need to add default route in here */}
                        <Route path="/login" component={AuthPage}>
                        </Route>
                        {/**TODO: Need to add auth check for protected routes starting below */}
                        <Route path="/dashboard" component={Dash}>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}