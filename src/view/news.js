import React, { Component } from 'react';
import Template from '../components/template'
import {Grid, Segment} from 'semantic-ui-react'
import Adv from '../components/advertisement'




class App extends Component {

    render() {
        const advertise = <Segment>advertise</Segment>;
        const news_image = <img src={require("../images/horse.jpg")} style={{"width":"12vw","height":"12vh","float": "right"}}/>;
        const news = <Segment style={{"overflow":"auto"}}>
            {news_image}
            <header style={{"text-decoration": "underline"}}><h2>Strong Hossein</h2></header>
            <body>Strong Hossein is back</body>
            </Segment>;
            const other_news=
            <Segment>

                <a id="ew" href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">ews</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
            </Segment>;
                const body =
            <Grid style={{width:'100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={3}>
                        <Adv link={'http://www.yjc.ir/fa/ads/redirect/a/929'} advertisement={'https://cdn.yjc.ir/files/adv/3955_459.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        {news}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {other_news}
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