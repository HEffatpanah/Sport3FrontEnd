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
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
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
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                                {
                                    playerName: 'حسین عفت پناه', playerGoals: 2,
                                    playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                            {
                                playerName: 'علی اصغرخانی', playerGoals: 2,
                                playerYellowCards: 0, playerRedCards: 0, playerReplaceTime: null
                            },
                        ]
                    }

                },
            }
    };


const matchRecord = {
    tableData: [
        {featureName: 'کرنرها', featureValue: 5},
        {featureName: 'تعداد خطاها', featureValue: 7},
        {featureName: 'موقعیت گل ها', featureValue: 2},
        {featureName: 'تعداد گل ها', featureValue: 1},
        {featureName: 'درصد مالکیت توپ', featureValue: '20%'},
    ],
};




export default class Match extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        const body =
            <Grid>
                <Grid.Row style={{width:'100%'}} columns={2}>
                    <Grid.Column>
                        {/*<TimeLine/>*/}
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Grid.Row columns={1}>
                            <Grid.Column width={16}><MatchInfo matchRecord={matchRecord}/></Grid.Column>
                            {/*<Grid.Column><PlayersInfo/></Grid.Column>*/}
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            {/*<Grid.Column><OnlineReport/></Grid.Column>*/}
                            {/*<Grid.Column><FringeNews/></Grid.Column>*/}
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            {/*<Grid.Column><MultiMedia/></Grid.Column>*/}
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        return(
            <Template {...this.props} body={body}/>
        );
    }
}

