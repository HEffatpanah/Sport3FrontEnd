import React, { Component } from 'react';
import Template from '../components/template'
import {Grid, Segment} from 'semantic-ui-react'
import Adv from '../components/advertisement'
import Newssummery from '../components/news/newsSummery'
import NewsDetail from "../components/news/newsDetail";


const newsData=[
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
];
const newDetail={
    image_url:"images/horse.jpg",
    title:"Strong Hossein",
    dateTime:"97/10/1",
    sources:[
        {name:"farseNews",link : "https://www.farsnews.com"},
        {name:"Varzesh3",link : "http://www.varzesh3.com"},
    ],
    tages:[
        {name:"Hossein",link : "https://www.raja.ir"},
        {name:"all",link : "http://www.varzesh3.com"},
    ],
    body:"Strong Hossein is belong to all",
    comments:[
        {name:"Hossein",comment:"hossein is belong to all"},
        {name:"Ali",comment:"ali work with hossein"},
        ]
};


class App extends Component {
    state = {
        newsData: newsData,
        newDetail:newDetail,
    };

    render() {
        const advertise = <Segment>advertise</Segment>;
        const news_image = <img src={require("images/horse.jpg")}
                                style={{"width": "12vw", "height": "12vh", "float": "right"}}/>;
        const news = <Segment style={{"overflow": "auto"}}>
            {news_image}
            <header style={{"text-decoration": "underline"}}><h2>Strong Hossein</h2></header>
            <body>Strong Hossein is back</body>
        </Segment>;
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={3}>
                        <Adv link={'http://www.yjc.ir/fa/ads/redirect/a/929'}
                             advertisement={'https://cdn.yjc.ir/files/adv/3955_459.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <NewsDetail newDetail={this.state.newDetail}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            <Newssummery newsData={this.state.newsData}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <div>
                <Template {...this.props} body={body}/>
            </div>);
    }
}
export default App;