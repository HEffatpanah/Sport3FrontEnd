import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
import { Tab} from 'semantic-ui-react'
import {Translate} from "react-localize-redux";



class MatchSummary extends Component {

    render() {

        const info = this.props.matchData;

        return (
            <Table.Row style={{'width':'100%'}}>
                <Table.Cell width={2}><a href={info['team1Link']} target='_blank'>{info['team1Name']}</a></Table.Cell>
                <Table.Cell width={1}>{info['team1Goal']+'-'+info['team2Goal']}</Table.Cell>
                <Table.Cell width={2}><a href={info['team2Link']} target='_blank'>{info['team2Name']}</a></Table.Cell>
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
        const v = this.state.matchesData.map((data) => {
                    return(
                        <MatchSummary matchData={data}/>
                    )
                }
            );
        return(
            <Table>
             <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> {<Translate id="team name" />}</Table.HeaderCell>
                        <Table.HeaderCell> {<Translate id="result" />}</Table.HeaderCell>
                        <Table.HeaderCell> {<Translate id="team name" />}</Table.HeaderCell>
                        <Table.HeaderCell> {<Translate id="date" />}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{v}</Table.Body>
            </Table>
        )
    };
    render() {
           const all=<Translate id="all" />;
        const fav=<Translate id="favorite" />;
        const panes = [
            { menuItem:  { key: 'all', content:all} , render: () => <Tab.Pane>{this.getTableData()}</Tab.Pane> },
            { menuItem: { key: 'favorite', content:fav}, render: () => <Tab.Pane><div>Mahdi</div></Tab.Pane> },
        ];

        const MatchesTable =
                <Tab panes={panes} />;
        return (
                    MatchesTable
        );
    }
}