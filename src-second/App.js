import React, { Component } from 'react';
import './App.css';
import Template from './components/template';
import { Tab,Grid } from 'semantic-ui-react'


const slideImages = [
  require('./assets/images/horse.jpg'),
  require('./assets/images/horse.jpg'),
  require('./assets/images/horse.jpg')
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class App extends Component {


    render() {
        const panes = [
            {menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>},
            {menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>},
            {menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>},
        ];
        var column_2 = <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Tab menu={{secondary: true}} panes={panes}/>
                </Grid.Column>
                <Grid.Column>
                    <Tab menu={{secondary: true}} panes={panes}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>;
        var column_3 = <a href={"www.google.com"}>www.google.com</a>;
        return (
            <div style={{'direction': 'rtl'}}>
                <Template template={{column_1: <div>تبلیغات</div>, column_2: column_2, column_3:column_3, column_4:<div>نظرات کاربران</div>}}/>
                {}
            </div>
        );
    }
}
export default App;