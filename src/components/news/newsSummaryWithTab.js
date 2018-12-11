import React, {Component} from 'react'
import {Icon, List, Menu} from "semantic-ui-react";


export default class NewsSummeryWithTab extends Component{
    state={
        newsData:this.props.newsData,
        activeItem:'آخرین ها'
    };
    newsBody() {
        if(this.state.activeItem === 'آخرین ها')
            return (this.state.newsData['last'].map(({title, link}) => {
                    return (
                        <div>
                            <Icon name='asterisk' color={"blue"}/>
                            <List.Item href={link} target={'_blank'} style={{color:'black'}}>{title}</List.Item>
                        </div>
                    )
                })
            )
        else
            return (this.state.newsData['favorite'].map(({title, link}) => {
                    return (
                        <div>
                            <Icon name='asterisk' color={"blue"}/>
                            <List.Item href={link} target={'_blank'} style={{color:'black'}}>{title}</List.Item>
                        </div>
                    )
                })
            )
    }
    handleItemClick = (e, {name}) => {
        console.log(e);
        this.setState({activeItem: name})
    };
    render() {
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='آخرین ها'
                        style={{width: '50%', textAlign: 'right'}}
                        onClick={this.handleItemClick}
                        active={this.state.activeItem === 'آخرین ها'}
                    />
                    <Menu.Item
                        style={{width: '50%  '}}
                        name='مورد علاقه ها'
                        active={this.state.activeItem === 'مورد علاقه ها'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                <List style={{ maxHeight: '150vh', overflow: 'auto', wordWrap:'break-word'}}>
                    {/*<List.Item>yt</List.Item>*/}
                    {this.newsBody()}
                </List>
            </div>
        );
    }
}