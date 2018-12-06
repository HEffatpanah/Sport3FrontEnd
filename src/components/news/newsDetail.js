import React, {Component} from 'react'
import {List, Segment} from "semantic-ui-react";


export default class NewsDetail extends Component {
    getSources() {
        return (
            this.props.newDetail['sources'].map(({name, link}) => {
                    return <li style={{'display': 'inline'}}><a href={link}>{name}&emsp;</a></li>
                }
            )
        );
    }

    getTages() {
        return (
            this.props.newDetail['tages'].map(({name, link}) => {
                    return <li style={{'display': 'inline'}}><a href={link}>{name}&emsp;</a></li>
                }
            )
        );
    }

    getComments() {
        return (
            this.props.newDetail['comments'].map(({name, comment}) => {
                return <Segment><div>{name}&emsp;{comment}</div></Segment>
                }
            )
        );
    }

    render() {
        console.log("hello");
        const image_url = this.props.newDetail['image_url'];
        const image_title = this.props.newDetail['title'];
        const image_dateTime = this.props.newDetail['dateTime'];
        const image_body = this.props.newDetail['body'];
        const news_image = <img src={require("../../" + image_url)}
                                style={{"width": "12vw", "height": "12vh", "float": "right"}}/>;
        const news = <Segment style={{"overflow": "auto"}}>
            <div>{news_image}</div>
            <div>date : {image_dateTime}</div>
            <header style={{"text-decoration": "underline"}}><h2>{image_title}</h2></header>
            <body>{image_body}</body>
            <ul>Sources : {this.getSources()}</ul>
            <ul>tags&emsp;&ensp; : {this.getTages()}</ul>
        </Segment>;
        const comments = <Segment>
            {this.getComments()}
        </Segment>;
        const new_comment = <Segment>
            <div class="ui form">
                <div class="field">
                    <label>Name</label>
                    <input type="text" name="first-name" placeholder="First Name"/>
                </div>
                <div class="field">
                    <label>Text</label>
                    <textarea></textarea>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </div>
        </Segment>
        return (<div>
                <div>
                    {news}
                </div>
                <div>
                    {comments}
                </div>
                <div>
                    {new_comment}
                </div>
            </div>
        );
    }
}