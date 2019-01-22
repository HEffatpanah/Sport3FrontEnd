import React, { Component } from 'react'
import {Grid, Loader, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import MatchesTable from '../components/team/matchInfo'
import TeamMembers from "../components/team/teamMember";
import NewsSummery from '../components/news/newsSummery'
import axios from "axios";
import globalTranslations from "../translations/global";


const matchData = [
    { ownerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { ownerTeamGoal:'2', opponentTeamGoal:'0', date:'1998-09-12', score:1, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
];

const newsData=[
    {title:'tractorhasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'perspoliasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjs', link:'https://www.google.com'},
];

const image_style = {
    height: '8vh',
    width: '5vw',
};

const membersData = {
    tableHeader: ['نام', 'سن', 'پست', 'عکس'],
    tableBody: [
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
    ]
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchesData:'',
            newsData:'',
            membersData:'',
            get:false,
        };
        this.get_data()
    }
    get_data(){
        let url = window.location.href
        url = url.replace('3', '8')
        axios.defaults.withCredentials = true;
        axios.get(url).then(response => this.setState({
            matchesData:response.data['matchesData'],
            newsData:response.data['newsData'],
            membersData:response.data['membersData'],
            get:true,
        }))
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        <Segment><NewsSummery newsData={this.state.newData}/></Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TeamMembers teamMembersData={this.state.membersData}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <MatchesTable matchesData={this.state.matchesData}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <Template {...this.props} body={body}/>

        )
    }
}

export default App