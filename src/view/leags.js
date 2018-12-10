import React, { Component } from 'react';
import {Tab, Segment, Grid, Table} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import LeagueTable from '../components/league/leagueTable'


const leagueData={
    leagueName:'جدول لیگ برتر (97-98) - لیگ برتر ایران',
    tableName:'لیگ برتر ایران',
    header:['امتیاز', 'تفاضل گل', 'گل خورده', 'گل زده', 'باخت', 'مساوی', 'برد', 'بازیها', 'تیم'],
    tableData:[
        [30, 16, 11, 27, 0, 6, 8, 14, 'سپاهان'],
        [30, 16, 11, 27, 0, 6, 8, 14, 'سپاهان'],
        [30, 16, 11, 27, 0, 6, 8, 14, 'سپاهان'],
        [30, 16, 11, 27, 0, 6, 8, 14, 'سپاهان'],
        [30, 16, 11, 27, 0, 6, 8, 14, 'سپاهان'],
    ]
};


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
    getTableRows(){
        return this.props.leagTeams.map(() => {
            return(
                <Table.Row active={false}>
                    <Table.Cell>John</Table.Cell>
                    <Table.Cell>Selected</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            )
        })
    }
    render() {

        const options = [
            { value: 'football', label: 'فوتبال' },
            { value: 'basketball', label: 'بسکتبال' },
        ];
        let body =
            <Grid style={{width:'100%'}}>
                <Grid.Row>

                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <LeagueTable leagueData={leagueData}/>
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