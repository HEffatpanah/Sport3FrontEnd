import React,{Component} from "react";
import TimeLine from '../components/match/timeLine'
import MatchInfo from '../components/match/matchInfo'
import PlayersInfo from '../components/match/playersInfo'
import OnlineReport from '../components/match/onlineReport'
import FringeNews from '../components/match/fringeNews'
import MultiMedia from '../components/match/multiMedia'

import { Menu,Grid, Dropdown, Icon} from 'semantic-ui-react'
import Template from '../components/template'

class matches extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            matchInformation: null,
        };
        let tmp = this.state.matchInformation;
        tmp['goal'] = 'ali';
        this.setState({matchInformation: tmp});
    }

    render() {
        const body =
            <Grid>
                <Grid.Column>
                    <TimeLine/>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Row columns={2}>
                        <Grid.Column><MatchInfo/></Grid.Column>
                        <Grid.Column><PlayersInfo/></Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column><OnlineReport/></Grid.Column>
                        <Grid.Column><FringeNews/></Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column><MultiMedia/></Grid.Column>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
    }
}

export default class App extends Component{
    render() {
        return (
            <Template body={body}/>
        );
    }
}