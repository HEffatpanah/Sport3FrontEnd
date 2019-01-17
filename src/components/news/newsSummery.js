import React, {Component} from 'react'
import {Icon, List} from "semantic-ui-react";


export default class NewsSummery extends Component{
    state={
        newsData:this.props.newsData
    };
    newsBody() {
        return (this.state.newsData.map(({title, link}) => {
                return (
                    <div>
                        <Icon name='asterisk' color={"blue"} />
                    <List.Item href={link} target={'_blank'} style={{color:'black'}}>{title}</List.Item>
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <List style={{ maxHeight: '150vh', overflow: 'auto', wordWrap:'break-word'}}>
                {this.newsBody()}
            </List>
        );
    }
}