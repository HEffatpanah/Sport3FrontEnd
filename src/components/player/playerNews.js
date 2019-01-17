import React, { Component } from 'react';
import { Slide , Fade, Zoom} from 'react-slideshow-image';
import {Tab, Segment, Grid, Image} from 'semantic-ui-react'
import Select from 'react-select';


const slideImages = [
    '../../images/1.png'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default class PlayerNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newsData : this.props.newsData
        };
        this.getNews = this.getNews.bind(this)
    }
    getNews(){
        return (this.state.newsData.map(({title, link, headLine, image}) => {
            return(

                <Grid href={link}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image alt={'salam'} src={require('../../images/horse.jpg')} />
                        </Grid.Column>
                        <Grid.Column style={{overflow: 'hidden', maxHeight:'9vh'}}>
                                <strong >{title}</strong>
                                <div >{headLine}</div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        }))
    }
    render() {
        return (
            <Slide {...properties}>
                {this.getNews()}
            </Slide>
        );
    }
}