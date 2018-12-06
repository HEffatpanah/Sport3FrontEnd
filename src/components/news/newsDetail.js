import React, {Component} from 'react'
import {Segment, Form, Input, TextArea, Button, Comment, Image, Divider} from "semantic-ui-react";

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
                    return <a style={{backgroundColor:'#c8c8c8', margin:'auto 0.2em', textAlign:'center', padding:'0.1em', color:'red'}} href={link}>{name}</a>
                }
            )
        );
    }

    getComment(){
        return (
            this.props.newDetail['comments'].map(({name, comment, date}) => {
                    return(
                        <Comment>
                            <Comment.Content>
                                <Comment.Author>{name}</Comment.Author>
                                <Comment.Metadata>
                                    <div>{date}</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <p>
                                        {comment}
                                    </p>
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    )
                }
            )
        );


    }
    getMoreImages(){
        return (
            this.props.newDetail['moreImagesUrl'].map((url) => {
                console.log(url) ;
                return(

                        <Image src={require("../../" + url)} style={{"width": "30vw", "height": "30vh", margin:'1em auto'}}/>

                    )
                }
            )
        );
    }
    render() {
        const image_url = this.props.newDetail['image_url'];
        const image_title = this.props.newDetail['title'];
        const image_dateTime = this.props.newDetail['dateTime'];
        const image_body = this.props.newDetail['body'];
        const moreImagesUrl = this.props.newDetail['moreImagesUrl'];
        const news_image =
            <img src={require("../../" + image_url)} style={{"width": "10vw", "height": "9vh", "float": "right", margin:'0.4em'}}/>;

        const news = <Segment style={{"overflow": "auto"}}>
            <div>{news_image}</div>
            <div><header style={{"text-decoration": "underline", display:'inline-block'}}><h2>{image_title}</h2></header>
                <div style={{float:'right', fontSize:'0.6em'}}>date : {image_dateTime}</div>
            </div>
            <div>{image_body}</div>
            <div>{this.getMoreImages()}</div>
            <div style={{clear:'both'}}><strong>source</strong></div>
            <div  style={{display: 'flex', flexDirection:'row', position:'relative', bottom:'0px', clear:'both'}}><strong>tags</strong>&ensp; :&ensp;  {this.getTages()}</div>
        </Segment>;
        const comments =
            <Segment>
                <Comment.Group style={{width:'100%'}} >
                    {this.getComment()}
                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>
            </Segment>;
        const new_comment = <Segment >
            <Form >
                <Form.Group widths='equal' >
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />

                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Opinion'
                    placeholder='Opinion'
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                    label='Label with htmlFor'
                />
            </Form>
        </Segment>;
        return (<Segment>
                {news}
                {comments}

            </Segment>
        );
    }
}