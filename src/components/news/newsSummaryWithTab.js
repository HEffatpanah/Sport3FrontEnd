import React, {Component} from 'react'
import {Button, Form, Icon, List, Menu} from "semantic-ui-react";
import {Translate} from "react-localize-redux";


export default class NewsSummeryWithTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: this.props.newsData,
            activeItem: 'آخرین ها'
        };
        this.get_news_numbers_field = this.get_news_numbers_field.bind(this)
    }

    newsBody() {
        if (this.state.activeItem === 'آخرین ها')
            return (this.state.newsData['last'].map(({title, link}) => {
                    return (
                        <div>
                            <Icon name='asterisk' color={"blue"}/>
                            <List.Item href={link} target={'_blank'} style={{color: 'black'}}>{title}</List.Item>
                        </div>
                    )
                })
            );
        else
            return (this.state.newsData['favorite'].map(({title, link}) => {
                    return (
                        <div>
                            <Icon name='asterisk' color={"blue"}/>
                            <List.Item href={link} target={'_blank'} style={{color: 'black'}}>{title}</List.Item>
                        </div>
                    )
                })
            )
    }

    handleItemClick = (e, {name}) => {
        console.log(e);
        this.setState({activeItem: name})
    };

    get_news_numbers_field() {
        if (this.props.logged_in === 'yes')
            return (
                <Form size='large' onSubmit={this.props.refresh_news_number}>
                    <Form.Input type='number' name='news_number' label={<Translate id="news_number"/>} required/>
                    <Button type='submit' content={<Translate id="submit"/>} color='teal' fluid size='large'/>
                </Form>
            )
    }

    render() {
        return (
            <div>
                {this.get_news_numbers_field()}

                <Menu pointing secondary>
                    <Menu.Item
                        name='آخرین ها'
                        style={{width: '50%'}}
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
                <List style={{maxHeight: '150vh', overflow: 'auto', wordWrap: 'break-word'}}>
                    {/*<List.Item>yt</List.Item>*/}
                    {this.newsBody()}
                </List>
            </div>
        );
    }
}