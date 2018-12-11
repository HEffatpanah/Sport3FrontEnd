import React, { Component } from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import MatchesTable from '../components/team/matchInfo'
import TeamMembers from "../components/team/teamMember";
import NewsSummery from '../components/news/newsSummery'



const matchData = [
    { owerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { owerTeamGoal:'2', opponentTeamGoal:'0', date:'1998-09-12', score:1, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { owerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
    { owerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"برد", opponent:'پدیده' , opponentLink:'https://www.google.com' },
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

const membersData = [
    {playerPage:'https://www.google.com',  name:'علی', age:'22', position:'حمله', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    {playerPage:'https://www.google.com',  name:'مهدی', age:'25', position:'دفاع', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    {playerPage:'https://www.google.com',  name:'عابباس', age:'21', position:'حمله', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    {playerPage:'https://www.google.com',  name:'ممد', age:'29', position:'دفاع', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    {playerPage:'https://www.google.com',  name:'اهبر', age:'29', position:'مربی', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:false},
];




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