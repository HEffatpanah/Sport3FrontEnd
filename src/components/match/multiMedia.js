import React, { Component } from 'react';
import { Slide , Fade, Zoom} from 'react-slideshow-image';
import {Tab, Segment, Grid, Image} from 'semantic-ui-react'
import Select from 'react-select';


const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default class MultiMedia extends Component{
    getMedia() {
        return (
            this.props.media.map(({url}) => {
                return <img alt={'salam'} src={require('../../../../Backend/images/'+url)}/>
            })
        )
    }
    render() {
        return (
            <Slide {...properties}>
                {this.getMedia()}
            </Slide>
        );
    }
}