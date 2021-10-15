import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div className="content">
                        <Switch>
                            <Route path="/login" component={login}>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

export default App;