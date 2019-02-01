import React, {Component} from 'react'
import {Segment, Form, Input, TextArea, Button, Comment, Image, Divider} from "semantic-ui-react";
import {Translate} from "react-localize-redux";
import axios from "axios";

export default class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    }
    state={
        newDetail: this.props.newDetail
    }
    getSources() {
        return (
            this.state.newDetail['sources'].map(({name, link}) => {
                    return <a style={{color:'#2905ff'}} href={link}>{name}&emsp;</a>
                }
            )
        );
    }

    getTages() {
        return (
            this.state.newDetail['tages'].map(({name, link}) => {
                    return <a style={{backgroundColor:'#c8c8c8', margin:'auto 0.2em', textAlign:'center', padding:'0.2em ', color:'red'}} href={link}>{name}</a>
                }
            )
        );
    }

    getComment(){
        return (
            this.state.newDetail['comments'].map(({name, comment, date}) => {
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
                                    <Comment.Action>پاسخ</Comment.Action>
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
            this.state.newDetail['moreImagesUrl'].map((url) => {
                console.log(url) ;
                return(

                        <Image src={require("../../../../Backend/images/" + url)} style={{"width": "30vw", "height": "30vh", margin:'1em auto'}}/>

                    )
                }
            )
        );
    }
    handleCommentSubmit(e){
        let url = window.location.href;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        let self = this;
        let bodyFormData = new FormData();
        bodyFormData.set('comment', e.target.comment.value);
        axios({
            method: 'post',
            url: url,
            data: bodyFormData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            window.location.reload();
        })
        // let aux = this.state.newDetail;
        // aux['comments'].push({name:e.target.name.value, comment:e.target.comment.value});
        // this.setState({newData:aux})
        // e.target.reset()
    }
    render() {
        const image_url = this.state.newDetail['image_url'];
        const news_title = this.state.newDetail['title'];
        const image_dateTime = this.state.newDetail['dateTime'];
        const image_body = this.state.newDetail['body'];
        const moreImagesUrl = this.state.newDetail['moreImagesUrl'];
        const news_image =
            <img src={require("../../../../Backend/images/" + image_url)}  style={{"width": "10vw", "height": "9vh", "float": localStorage.getItem('I_align'), margin:'0.4em'}}/>;

        const news = <Segment style={{"overflow": "auto", fontSize:'1.3em', lineHeight:'1.4em'}}>
            <div>{news_image}</div>
            <div><header style={{display:'inline-block'}}><h2>{news_title}</h2></header>
                <div style={{float:localStorage.getItem('I_align'), fontSize:'0.6em'}}>تاریخ : {image_dateTime}</div>
            </div>
            <div>{image_body}</div>
            <div>{this.getMoreImages()}</div>
            <div style={{clear:'both', fontSize:'0.8em'}}><strong>منابع:</strong>&ensp; :&ensp;  {this.getSources()}</div>
            <div  style={{display: 'flex', flexDirection:'row', position:'relative', bottom:'0px', clear:'both', fontSize:'0.8em'}}><strong>تگ ها</strong>&ensp; :&ensp;  {this.getTages()}</div>
        </Segment>;
        const comments =
            <Segment>
                <Comment.Group style={{margin:'auto'}} >
                    {this.getComment()}
                    <Form reply onSubmit={this.handleCommentSubmit}>
                        <Form.TextArea name='comment' label='نظر'/>
                        <Button content={<Translate id='add comment'/>} labelPosition={localStorage.getItem('I_align')} icon='edit' primary />
                    </Form>
                </Comment.Group>
            </Segment>;
        // const new_comment = <Segment >
        //     <Form >
        //         <Form.Group widths='equal' >
        //             <Form.Field
        //                 id='form-input-control-first-name'
        //                 control={Input}
        //                 label='First name'
        //                 placeholder='First name'
        //             />
        //
        //         </Form.Group>
        //         <Form.Field
        //             id='form-textarea-control-opinion'
        //             control={TextArea}
        //             label='Opinion'
        //             placeholder='Opinion'
        //         />
        //         <Form.Field
        //             id='form-button-control-public'
        //             control={Button}
        //             content='Confirm'
        //             label='Label with htmlFor'
        //         />
        //     </Form>
        // </Segment>;
        return (<Segment>
                {news}
                {comments}

            </Segment>
        );
    }
}