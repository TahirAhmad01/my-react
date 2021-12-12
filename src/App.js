import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/about';
import Error from './component/error';
import Home from './component/home';
import Navbar from './component/nav';
import Service from './component/service';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}
