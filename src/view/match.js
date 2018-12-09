import React,{Component} from "react";
import TimeLine from '../components/match/timeLine'
import MatchInfo from '../components/match/matchInfo'
import PlayersInfo from '../components/match/playersInfo'
import OnlineReport from '../components/match/onlineReport'
import FringeNews from '../components/match/fringeNews'
import MultiMedia from '../components/match/multiMedia'

import { Menu,Grid, Dropdown, Icon} from 'semantic-ui-react'
import Template from '../components/template'

const matchInfo =
    {
        tableName: 'اطلاعات بازی',
        tableData:
            {
                team1: {
                    generalRecords: [
                        {featureName: 'خطاها', featureValue: 10},
                        {featureName: 'کرنرها', featureValue: 12},
                        {featureName: 'موقعیت گل', featureValue: 15},
                        {featureName: 'تعداد گل', featureValue: 2},
                        {featureName: 'درصد مالکیت توپ', featureValue: "52.8%"},
                    ],
                    players: {
                        originalPlayers:
                            [
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 80, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 70, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: 47
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 0,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 10, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 0,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 1,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
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
                    players: {
                        originalPlayers:
                            [
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: null, playerRedCards: 0, playerReplaceTime: null
                            },
                        ]
                    }

                },
            }
    };


const medias =[
    {url:'images/horse.jpg'},
    {url:'images/horse.jpg'},
    {url:'images/horse.jpg'},
    {url:'images/horse.jpg'},
];



export default class Match extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        const body =
            <Grid style={{width:'100%'}}>
                <Grid.Row>

                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column style={{direction:'rtl'}} width={4}><PlayersInfo direction={'right'} playerInfo={matchInfo['tableData']['team1']['players']}/></Grid.Column>
                    <Grid.Column style={{direction:'rtl'}} width={4}><MatchInfo direction={'left'} matchRecord={matchInfo['tableData']['team1']}/></Grid.Column>
                    <Grid.Column style={{direction:'ltr'}} width={4}><MatchInfo direction={'right'} matchRecord={matchInfo['tableData']['team1']}/></Grid.Column>
                    <Grid.Column style={{direction:'ltr'}} width={4}><PlayersInfo direction={'left'} playerInfo={matchInfo['tableData']['team2']['players']}/></Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    {/*<Grid.Column><OnlineReport/></Grid.Column>*/}
                    {/*<Grid.Column><FringeNews/></Grid.Column>*/}
                </Grid.Row>
                <Grid.Row columns={1} style={{textAlign:'center', justifyContent: 'space-evenly'}}>
                    <Grid.Column width={6}><MultiMedia media={medias}/></Grid.Column>
                </Grid.Row>
            </Grid>;
        return(
            <Template {...this.props} body={body}/>
        );
    }
}

