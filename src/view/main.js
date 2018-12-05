import React, { Component } from 'react';
import { Tab, Segment, Grid} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import Newssummery from '../components/newsSummery'


const matchData = [
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'1998-09-12'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'1998-09-12'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'1998-09-12'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'1998-09-12'},
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport : "football"
        };
    }
    handleSelectorChange = (selectedOption) => {
        this.setState({selectedSport:selectedOption.value});
    };
    render() {

        const options = [
            { value: 'football', label: 'football' },
            { value: 'basketball', label: 'basketball' },
        ];
        const news =
            <Segment>

                <a id="ew" href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
            </Segment>;

        const Selectbar =
            <Select placeholder='Select Sport'  search selection options={options} onChange={this.handleSelectorChange}/>;
        let body =
            <Grid style={{width:'100%'}}>
                <Grid.Row columns={1}>
                    <Grid.Column width={4}>
                        <Segment>
                            {Selectbar}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3} style={{height:'87%'}}>
                    <Grid.Column width={4}>
                        <Segment>
                            <Newssummery/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <MatchesSummaryTable matchesData={matchData} sport={this.state.selectedSport}/>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <div>
                <Template {...this.props} body={body}  />
            </div>
        );
    }
}
export default App;