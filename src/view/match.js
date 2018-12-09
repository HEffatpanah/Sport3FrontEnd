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
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'goalkeeper',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 80, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 70, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: 47
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 10, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 1,
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'goalkeeper',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: 47
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
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
                    players: {
                        originalPlayers:
                            [
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'goalkeeper',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 2,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: 56
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 1,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: 75
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                                {
                                    Name: 'حسین عفت پناه', Goals: 0,Post:'forward',
                                    YellowCards: 0, RedCards: 0, ReplaceTime: null
                                },
                            ],
                        substitutesPlayers: [
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'goalkeeper',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 1,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: 56
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 0,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: null
                            },
                            {
                                Name: 'علی اصغرخانی', Goals: 1,Post:'forward',
                                YellowCards: 0, RedCards: 0, ReplaceTime: 75
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
                <Grid.Row  columns={2}>
                    <Grid.Column>
                        {/*<TimeLine/>*/}
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Grid>
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
                            <Grid.Row columns={1}>
                                <Grid.Column><MultiMedia media={medias}/></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        return(
            <Template {...this.props} body={body}/>
        );
    }
}

