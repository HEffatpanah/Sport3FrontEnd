import React,{Component} from "react";
import {Image, Segment} from "semantic-ui-react";

export default class Adv extends Component{
    render() {
        const style={
            overflow:'hidden',
            height:'auto',
            width:'auto'
        }
        return (
            <a href={this.props.link} target={"_blank"}><Image src={this.props.advertisement}/></a>
        );
    }
}