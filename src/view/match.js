import React, {Component} from "react";
import TimeLine from '../components/match/timeLine'
import MatchInfo from '../components/match/matchInfo'
import PlayersInfo from '../components/match/playersInfo'
import MultiMedia from '../components/match/multiMedia'
import NewsSummery from '../components/news/newsSummery'
import {Translate} from "react-localize-redux";


import {Grid, Loader, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import axios from "axios";
//
//
// const newsData = [
//     {
//         title: 'tractorhasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'perspoliasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjs',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
//     {
//         title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
//         link: 'https://www.google.com'
//     },
// ];


const matchInfo =
    {
        tableName: 'اطلاعات بازی',
        tableType: 'فوتبال',
        tableData:
            {
                matchMinutes: 93,
                team1: {
                    generalRecords: [
                        {featureName: 'خطاها', featureValue: 10},
                        {featureName: 'کرنرها', featureValue: 12},
                        {featureName: 'موقعیت گل', featureValue: 15},
                        {featureName: 'تعداد گل', featureValue: 2},
                        {featureName: 'درصد مالکیت توپ', featureValue: "52.8%"},
                    ],
                    events: [
                        {featureName: 'yc', featureValue: [70, 15, 80]},
                        {featureName: 'drc', featureValue: [85]},
                        {featureName: 'syc', featureValue: [90]},
                        {featureName: 'g', featureValue: [35, 47, 50, 76, 92]},
                        {featureName: 's', featureValue: [57, 75]},
                    ],
                    players: {
                        originalPlayers:
                            [
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'goalkeeper',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 80, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 70, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: 47
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 10, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 1,
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'goalkeeper',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: 47
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                        ]
                    }

                },
                team2: {
                    generalRecords: [
                        {featureName: 'خطاها', featureValue: 7},
                        {featureName: 'کرنرها', featureValue: 5},
                        {featureName: 'موقعیت گل', featureValue: 6},
                        {featureName: 'تعداد گل', featureValue: 3},
                        {featureName: 'درصد مالکیت توپ', featureValue: "47.2%"},
                    ],
                    events: [
                        {featureName: 'yc', featureValue: [15, 75, 60]},
                        {featureName: 'drc', featureValue: [82]},
                        {featureName: 'syc', featureValue: []},
                        {featureName: 'g', featureValue: [35, 51, 60]},
                        {featureName: 's', featureValue: [40, 88]},
                    ],
                    players: {
                        originalPlayers:
                            [
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'goalkeeper',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 2, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: 56
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 1, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: 75
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0, Post: 'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'goalkeeper',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 1, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: 56
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 1, Post: 'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: 75
                            },
                        ]
                    }

                },
            }
    };


export default class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onlineNewsData: [],
            fringeNewsData: [],
            medias: null,
            matchInfo: null,
            get: false
        };
        this.get_data();
        this.get_news = this.get_news.bind(this)
    }

    get_news() {
        if (this.state.onlineNewsData.length)
            return (
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div style={{fontSize: '1.5em'}}><Translate id="online news"/></div>
                        <Segment style={{maxHeight: '40vh', overflow: 'auto'}}>
                            <NewsSummery newsData={this.state.onlineNewsData}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{fontSize: '1.5em'}}><Translate id='fringe news'/></div>
                        <Segment style={{maxHeight: '40vh', overflow: 'auto'}}>
                            <NewsSummery newsData={this.state.fringeNewsData}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            );
        else
            return (
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <div style={{fontSize: '1.5em'}}><Translate id='fringe news'/></div>
                        <Segment style={{maxHeight: '40vh', overflow: 'auto'}}>
                            <NewsSummery newsData={this.state.fringeNewsData}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            )
    }

    get_data() {
        let url = window.location.href;
        url = url.replace('3', '8');
        if (localStorage.getItem('Authorization') != null) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
        }
        axios.defaults.withCredentials = true;
        console.log('ali');
        axios.get(url).then(response => {
            console.log(response);
            this.setState({
                onlineNewsData: response.data['onlineNewsData'],
                fringeNewsData: response.data['fringeNewsData'],
                matchInfo: response.data['matchInfo'],
                medias: response.data['medias'],
                get: true,
            })

        })
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <div style={{maxWidth: '100%', overflow: 'auto'}}>
                            <TimeLine minutes={matchInfo['tableData']['matchMinutes']}
                                      matchData={this.state.matchInfo['tableData']}/>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column width={4}><PlayersInfo
                        playerInfo={this.state.matchInfo['tableData']['team1']['players']}/></Grid.Column>
                    <Grid.Column width={4}><MatchInfo
                        matchRecord={this.state.matchInfo['tableData']['team1']}/></Grid.Column>
                    <Grid.Column width={4}><MatchInfo
                        matchRecord={this.state.matchInfo['tableData']['team2']}/></Grid.Column>
                    <Grid.Column width={4}><PlayersInfo
                        playerInfo={this.state.matchInfo['tableData']['team2']['players']}/></Grid.Column>
                </Grid.Row>
                {this.get_news()}
                <Grid.Row columns={1} style={{textAlign: 'center', justifyContent: 'space-evenly'}}>
                    <Grid.Column width={6}><MultiMedia media={this.state.medias}/></Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <Template {...this.props} body={body}/>
        );
    }
}

