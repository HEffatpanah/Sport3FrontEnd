import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
import { Tab, Segment} from 'semantic-ui-react'



class MatchSummary extends Component {

    render() {

        const info = this.props.matchData;

        return (
            <Table.Row style={{'width':'100%'}}>
                <Table.Cell width={2}>{info['team1Name']}</Table.Cell>
                <Table.Cell width={2}>{info['team1Goal']+'-'+info['team2Goal']}</Table.Cell>
                <Table.Cell width={2}>{info['team2Name']}</Table.Cell>
                <Table.Cell width={1}>{info['date']}</Table.Cell>
            </Table.Row>
        )
    }
}


export default class MatchesSummaryTable extends Component{
    state ={
        matchesData:this.props.matchesData,
    };
    getTableData (){
        return(
            this.state.matchesData.map((data) => {
                    return(
                        <MatchSummary matchData={data}/>
                    )
                }
            )
        )
    };
    render() {
        const footballMatches = [
            { menuItem: 'favorite', render: () => <Tab.Pane>{this.getTableData()}</Tab.Pane> },
            { menuItem: 'all', render: () => <Tab.Pane><div>Mahdi</div></Tab.Pane> },
        ];
        const basketballMatches = [
            { menuItem: 'favorite', render: () => <Tab.Pane>{this.getTableData()}</Tab.Pane> },
            { menuItem: 'all', render: () => <Tab.Pane><div>Taha</div></Tab.Pane> },
        ];
        const pansMap = {
            "football":footballMatches,
            "basketball":basketballMatches,
        };
        const MatchesTable =
            <Segment>
                <Tab panes={pansMap[this.props.sport]}/>
            </Segment>;
        return (
            <Table>
                    {MatchesTable}
            </Table>
        );
    }
}