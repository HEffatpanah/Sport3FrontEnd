import React, {Component} from 'react'
import {List} from "semantic-ui-react";


export default class Newssummery extends Component{
    state={
        newsData:this.props.newsData
    }
    newsBody() {
        return (this.state.newsData.map(({title, link}) => {
                return (<List.Item href={link} target={'_blank'} >{title}</List.Item>)
            })
        )
    }
    render() {
        return (
            <List style={{ maxHeight: '50vh', overflow: 'auto', wordWrap:'break-word', direction:'rtl'}}>
                {/*<List.Item>yt</List.Item>*/}
                {this.newsBody()}
            </List>
        );
    }
}