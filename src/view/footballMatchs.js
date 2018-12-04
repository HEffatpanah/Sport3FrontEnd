import React,{Component} from "react";

import { Menu,Grid, Dropdown, Icon} from 'semantic-ui-react'


export default  class matche extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            matchInformation: {},
        };
        let tmp = this.state.matchInformation;
        tmp['goal'] = ['ali', 'mamad'];
        this.setState({matchInformation: tmp});
        tmp['card'] = 'jafar';
        this.setState({matchInformation: tmp});
    }

    render() {
        console.log(this.state.matchInformation['card']);
        console.log(this.state.matchInformation['goal']);

        return (
            <Menu m={{matchInformation: this.state.matchInformation, summary:false}}/>
        );
    }
}