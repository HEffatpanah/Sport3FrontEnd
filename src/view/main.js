import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import globalTranslations from "../translations/global";
import {Translate, withLocalize} from "react-localize-redux";
import NewsSummeryWithTab from '../components/news/newsSummaryWithTab'

const matchData = [
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
];


const newsData=[
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport : "football",
        };
        console.log(this.props);
        this.props.addTranslation(globalTranslations);
    }


    render() {

        let body =
            <Grid style={{width:'100%'}}>

                <Grid.Row columns={4} style={{height:'87%'}}>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment style={{textAlign:'center'}}>
                                        {<Translate id="football" />}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column  style={{padding:0}} width={9}>
                                    <MatchesSummaryTable matchesData={matchData}/>
                                </Grid.Column>
                                <Grid.Column  style={{padding:0}} width={7}>
                                    <Segment>
                                    <NewsSummeryWithTab newsData={newsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column  style={{padding:0}} width={2}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment style={{textAlign:'center'}}>
                                        {<Translate id="basketball" />}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column  style={{padding:0}} width={9}>
                                    <MatchesSummaryTable matchesData={matchData}/>
                                </Grid.Column>
                                <Grid.Column  style={{padding:0}} width={7}>
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