import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import AuthPage from "./pages/Auth";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div className="content">
                        <Switch>
                            <Route path="/login" component={AuthPage}>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

export default App;