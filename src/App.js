import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

import Page1 from './view/main';
import Page2 from './view/login';
import Page3 from './view/news';
import Page4 from './view/teams';
import Page5 from './view/footballMatchs';
import Page6 from './view/basketballMatchs';
import Page7 from './components/match/timeLine';

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
                    <Route exact path='/footballMatches' component={Page5} />
                    <Route exact path='/basketballMatches' component={Page6} />
                    <Route exact path='/ali' component={Page7} />
                </Switch>
            </Router>
        );
    }
}