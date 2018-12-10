import React, {Component} from 'react'
import {Icon, List} from "semantic-ui-react";


export default class Newssummery extends Component{
    state={
        newsData:this.props.newsData
    }
    newsBody() {
        return (this.state.newsData.map(({title, link}) => {
                return (
                    <div>
                        <Icon name='angle double left' />
                    <List.Item href={link} target={'_blank'} style={{color:'black'}}>{title}</List.Item>
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <List style={{ maxHeight: '150vh', overflow: 'auto', wordWrap:'break-word', direction:'rtl'}}>
                {/*<List.Item>yt</List.Item>*/}
                {this.newsBody()}
            </List>
        );
    }
}