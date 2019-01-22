import React, {Component} from 'react';
import {Tab, Segment, Grid, Table} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import LeagueTable from '../components/league/leagueTable'
import OldLeague from '../components/league/oldLeague'
import NewLeague from '../components/league/newLeague'



const leagueData = {
    leagueName: 'لیگ برتر(96-97)',
    tableName: 'لیگ برترایران',
    header: ['تیم', 'بازیها', 'برد', 'مساوی', 'باخت', 'گل زده', 'گل خورده', 'تفاضل گل', 'امتیاز'],
    tableData: [
        {
            teamInfo: [
                {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                {featureName: 'matches', featureValue: 23, featureLink: null},
                {featureName: 'win', featureValue: 2, featureLink: null},
                {featureName: 'draw', featureValue: 3, featureLink: null},
                {featureName: 'loose', featureValue: 3, featureLink: null},
                {featureName: 'goalZ', featureValue: 3, featureLink: null},
                {featureName: 'goalK', featureValue: 3, featureLink: null},
                {featureName: 'goalSub', featureValue: 3, featureLink: null},
                {featureName: 'score', featureValue: 3, featureLink: null},
            ]
        },
        {
            teamInfo: [
                {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                {featureName: 'matches', featureValue: 23, featureLink: null},
                {featureName: 'win', featureValue: 2, featureLink: null},
                {featureName: 'draw', featureValue: 3, featureLink: null},
                {featureName: 'loose', featureValue: 3, featureLink: null},
                {featureName: 'goalZ', featureValue: 3, featureLink: null},
                {featureName: 'goalK', featureValue: 3, featureLink: null},
                {featureName: 'goalSub', featureValue: 3, featureLink: null},
                {featureName: 'score', featureValue: 3, featureLink: null},
            ]
        },
    ]
};

const matchSummaryData = {
    tableHeader: ['نام تیم', 'نتیجه', 'نام تیم', 'تاریخ'],
    tableBody: [
        {
            league_season: 'لیگ برتر(97-98)',
            matches: [{
                team1Name: 'mancity',
                team1Link: 'https://www.google.com',
                team2Name: 'arsenal',
                team2Link: 'https://www.google.com',
                team1Goal: '2',
                team2Goal: '1',
                date: 'امروز'
            },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
            ]
        },
    ]
};


const newLeaguesData = [
    {
        leagueName: 'لیگ قهرمانان اروپا',
        sessions: ['لیگ برتر(94-95)', 'لیگ برتر(95-96)', 'لیگ برتر(96-97)', 'لیگ برتر(97-98)']
    },

];

const matchData = [
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
];
const oldLeaguesData = [
    {
        leagueName: 'لیگ قهرمانان اروپا',
        sessions: ['لیگ برتر(94-95)', 'لیگ برتر(95-96)', 'لیگ برتر(96-97)', 'لیگ برتر(97-98)']
    },


];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport: "football",
            session: 'لیگ برتر(97-98)',
        };
        this.setSession = this.setSession.bind(this)
    }

    handleSelectorChange = (selectedOption) => {
        this.setState({selectedSport: selectedOption.value});
    };

    getTableRows() {
        return this.props.leagTeams.map(() => {
            return (
                <Table.Row active={false}>
                    <Table.Cell>John</Table.Cell>
                    <Table.Cell>Selected</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            )
        })
    }

    setSession(session) {
        console.log('man', this.state.session);
        this.setState({session: session})
    }

    render() {

        const options = [
            {value: 'football', label: 'فوتبال'},
            {value: 'basketball', label: 'بسکتبال'},
        ];
        let body =
            <Grid style={{width: '100%'}}>

                <Grid.Row>

                    <Grid.Column width={9}>
                        <Grid.Row>
                            <LeagueTable session={this.state.session} leagueData={leagueData}/>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '2vh'}}>
                            <MatchesSummaryTable session={this.state.session} matchesData={matchSummaryData}/>
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column width={4}>

                        <Grid.Row style={{margin: '1vh auto'}}>
                            <OldLeague sessionName={this.setSession} leaguesData={oldLeaguesData}/>
                        </Grid.Row>
                        <Grid.Row>
                            <NewLeague sessionName={this.setSession} leaguesData={newLeaguesData}/>
                        </Grid.Row>

                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Adv
                            link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'}
                            advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <div>
                <Template {...this.props} body={body}/>
            </div>
        );
    }
}

export default App;