import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane paneWidth={8} attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane paneWidth={8} attached={false}>Tab 2 Content</Tab.Pane> },
]

export default class oldLeague extends Component{
    render() {
        return (
            <Tab menu={{ secondary: true, pointing: true }}  panes={panes} />
        );
    }

}