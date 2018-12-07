// import _ from 'lodash'
import React, { Component } from 'react'
import {Grid, Segment, Table, Dropdown, Button} from 'semantic-ui-react'
import Template from '../components/template'
// import Statistics from '../components/players/statistics'
import PlayerInfoTable from "../components/players/playersInfo";
import Newssummery from '../components/news/newsSummery'

const playerData = [
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
    { name:'ali', age:23, height:180, weight:78, currentTeam:'tractor',nationality :'Iran', position:'forward' },
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
]

const image_style={
    height:'8vh',
    width:'5vw',
}

const membersData = [
    { name:'ali', age:'22', position:'forward', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    { name:'mahdi', age:'25', position:'defence', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    { name:'taha', age:'21', position:'forward', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    { name:'mammad', age:'29', position:'defence', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:true},
    { name:'mammad', age:'29', position:'coach', photo:<img style={image_style} src={require('../images/horse.jpg')}/>, isPlayer:false},
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
                    <Grid.Column width={3}>
                        <Segment><Newssummery newsData={newsData}/></Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>

                    </Grid.Column>
                    <Grid.Column width={5}>
                        <PlayerInfoTable playerData={playerData}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return(
            <Template {...this.props} body={body} />

        )
    }
}
export default App