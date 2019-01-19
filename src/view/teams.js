import React, { Component } from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import MatchesTable from '../components/team/matchInfo'
import TeamMembers from "../components/team/teamMember";
import NewsSummery from '../components/news/newsSummery'



const matchData = [
    { ownerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { ownerTeamGoal:'2', opponentTeamGoal:'0', date:'1998-09-12', score:1, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { ownerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { ownerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
];

// const center_vertically={
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
// }


const newsData=[
    {title:'tractorhasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'perspoliasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjs', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
];

const image_style={
    height:'8vh',
    width:'5vw',
};

const membersData = {
    tableHeader:['نام', 'سن', 'پست', 'عکس'],
    tableBody:[
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'دفاع', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'دفاع', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'دفاع', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'دفاع', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'دفاع', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'حمله', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'حمله', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'حمله', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'علی', featureLink:'https://www.google.com'},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'حمله', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
               {featureName:'playerName',featureValue:'حسین', featureLink:null},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'مدیر', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },
        {
            memberInfo:[
                {featureName:'playerName',featureValue:'حسین', featureLink:null},
                {featureName:'age',featureValue:23, featureLink: null},
                {featureName:'position',featureValue:'مدیر', featureLink: null},
                {featureName:'photo',featureValue:'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg', featureLink: null},
            ]
        },

    ]
};




class App extends Component {
    state={
        ali:1
    };
    render(){
        const body =
            <Grid style={{width:'100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        <Segment><NewsSummery newsData={newsData}/></Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TeamMembers teamMembersData={membersData}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <MatchesTable matchesData={matchData}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return(
            <Template {...this.props} body={body} />

        )
    }
}
export default App