import React,{Component} from "react";

import { Menu} from 'semantic-ui-react'


export default  class matche extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            matches:[{'point':3, 'date':2},{'point':4, 'date':1}, {'point':1, 'date':3}],
        };

        // let tmp = this.state.matchInformation;
        // tmp['goal'] = ['ali', 'mamad'];
        // this.setState({matchInformation: tmp});
        // tmp['card'] = 'jafar';
        // this.setState({matchInformation: tmp});
    }

    render() {




        return (
            <Menu m={{matchInformation: this.state.matchInformation, summary:false}}/>

        );
    }
}