import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

import Page1 from './view/main';
import Page2 from './view/login';
import Page3 from './view/news';
import Page4 from './view/teams';
import Page5 from './view/match';
import Page6 from './view/signup';
import Page7 from './view/player';
import Page8 from './view/leags';
import Page9 from './components/league/oldLeague';

const history = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Page1} />
                    <Route exact path='/login' component={Page2} />
                    <Route exact path='/news' component={Page3} />
                    <Route exact path='/teams' component={Page4} />
                    <Route exact path='/match' component={Page5} />
                    <Route exact path='/signup' component={Page6} />
                    <Route exact path='/player' component={Page7} />
                    <Route exact path='/leage' component={Page8} />
                    <Route exact path='/test' component={Page9} />
                </Switch>
            </Router>
        );
    }
}