import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import globalTranslations from "../translations/global";
import {Translate, withLocalize} from "react-localize-redux";
import NewsSummeryWithTab from '../components/news/newsSummaryWithTab'
import axios from "axios";

const matchData = {
    tableHeader:['نام تیم', 'نتیجه','نام تیم','تاریخ'],
    tableBody:[
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
        { team1Name:'mancity', team1Link:'https://www.google.com',  team2Name:'arsenal', team2Link:'https://www.google.com',  team1Goal:'2',team2Goal:'1', date:'امروز'},
    ]
};


const newsData= {
    favorite: [
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
        {title: 'پدیده تیم بسیار چرتی میباشد!!', link: 'https://www.google.com'},
    ],
    last: [
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
        {title: 'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link: 'https://www.google.com'},
    ]
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport : "football",
        };
        console.log(this.props);
        this.props.addTranslation(globalTranslations);
    }

    componentWillMount(){
        let url = window.location.href
        url = url.replace('3', '8')
        console.log(url)
        axios.defaults.withCredentials = true;
        axios.get(url).then(response => console.log(response.data))
    }
    render() {

        let body =
            <Grid style={{width:'100%'}}>

                <Grid.Row columns={4} style={{height:'87%'}}>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment style={{textAlign:'center', backgroundColor:'#179c36', color:'white'}}>
                                        {<Translate id="football" />}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column   width={9}>
                                    <Grid.Row>
                                    <MatchesSummaryTable matchesData={matchData}/>
                                    </Grid.Row>
                                    <Grid.Row style={{marginTop:'1vh'}}>
                                        <Adv advertisement={'https://static.farakav.com/v3/static/bpx/00910571.gif'}/>
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column   width={7}>
                                    <Segment>
                                        <NewsSummeryWithTab newsData={newsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column   width={2}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment style={{textAlign:'center', backgroundColor:'#ebc004', color:'white'}}>
                                        {<Translate id="basketball" />}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column   width={9}>
                                    <Grid.Row>
                                    <MatchesSummaryTable matchesData={matchData}/>
                                    </Grid.Row>
                                    <Grid.Row style={{marginTop:'1vh'}}>
                                        <Adv advertisement={'https://static.farakav.com/v3/static/bpx/00910379.gif'}/>
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column   width={7}>
                                    <Segment>
                                        <NewsSummeryWithTab newsData={newsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <div>
                <Template {...this.props} body={body}  />
            </div>
        );
    }
}
export default withLocalize(App);