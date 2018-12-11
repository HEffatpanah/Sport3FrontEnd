import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import './App.css';

import globalTranslations from "./translations/global";
import ReactDOMServer from "react-dom/server";
import {LocalizeProvider, withLocalize} from 'react-localize-redux';
import {createBrowserHistory} from "history";
import {renderToStaticMarkup} from "react-dom/server";


import Page1 from './view/main';
import Page2 from './view/login';
import Page3 from './view/news';
import Page4 from './view/teams';
import Page5 from './view/match';
import Page6 from './view/signup';
import Page7 from './view/player';
import Page8 from './view/leagues';


const history = createBrowserHistory();

class App extends Component {
    state={
        c:false,
    }
    render() {
        console.log(localStorage.getItem('lan'))
        return (
            <LocalizeProvider initialize={{
                languages: [
                    { name: "English", code: "en" },
                    { name: "Persian", code: "fa" }
                ],
                translation: globalTranslations,
                options: {
                    defaultLanguage: localStorage.getItem('lan'),
                    renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup
                }
            }}>
                <Router history={history}>
                    <Switch>
                        <Route {...this.props} exact path='/' component={Page1} />
                        <Route exact path='/login' component={Page2} />
                        <Route exact path='/news' component={Page3} />
                        <Route exact path='/teams' component={Page4} />
                        <Route exact path='/match' component={Page5} />
                        <Route exact path='/signup' component={Page6} />
                        <Route exact path='/player' component={Page7} />
                        <Route exact path='/league' component={Page8} />
                    </Switch>
                </Router>
            </LocalizeProvider>
        );
    }
}
export default withLocalize(App);