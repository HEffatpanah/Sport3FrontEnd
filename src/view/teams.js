import _ from 'lodash'
import React, { Component } from 'react'
import {Grid, Segment, Table, Dropdown, Button} from 'semantic-ui-react'
import Template from '../components/template'
import MatchesTable from '../components/team/matcheInfo'
import TeamMembers from "../components/team/teamMember";

const matchData = [
    { owerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"win"  },
    { owerTeamGoal:'2', opponentTeamGoal:'0', date:'1998-09-12', score:1, status:"win"  },
    { owerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"win"  },
    { owerTeamGoal:'3', opponentTeamGoal:'0', date:'1998-09-12', score:3, status:"win"  },
];

// const center_vertically={
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
// }


const image_style={
    height:'8vh',
    width:'5vw',
}

const membersData = [
    { name:'ali', age:'22', position:'forward', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
    { name:'mahdi', age:'25', position:'defence', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
    { name:'taha', age:'21', position:'forward', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
    { name:'mammad', age:'29', position:'defence', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
]




class App extends Component {
    state={
        ali:1
    };
    asd = () =>{
        this.setState({ali:2})
    }
    render(){
        console.log('ali');
        const news =
            <Segment>

                <a id="ew" href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">ews</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
            </Segment>;
        const body =
            <Grid style={{width:'100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        <MatchesTable matchesData={matchData}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TeamMembers teamMembersData={membersData}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {news}
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return(
            <Template {...this.props} body={body} />

        )
    }
}
export default App