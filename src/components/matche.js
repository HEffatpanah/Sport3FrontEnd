import React,{Component} from "react";

import { Menu,Grid, Dropdown, Icon} from 'semantic-ui-react'


class matche extends Component{
    constructor(prop){
        super(prop);
     this.state = {
         matchInformation: null,
     };
     let tmp=this.state.matchInformation;
     tmp['goal']='ali';
     this.setState({matchInformation:tmp});
    }
    render() {
        if (this.props.summery)
            return
        else
            return
    }
}