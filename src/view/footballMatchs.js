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
        console.log(this.state.matchInformation['component']);
        let match=this.state.matchInformation['component'];
        if(this.state.matchInformation['component']===undefined) {
            match = <div>salam</div>;
            let tmp = this.state.matchInformation;
        tmp['component'] = match;
            this.setState({matchInformation: tmp});
        }
        // match=<Menu m={{matchInformation: this.state.matchInformation, summary:false}}/>
        return (
            <div>{match}</div>
        );
    }
}