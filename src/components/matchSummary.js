import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
import { Tab} from 'semantic-ui-react'
import {Translate} from "react-localize-redux";





export default class MatchesSummaryTable extends Component{
    state ={
        matchesData:this.props.matchesData,
    };
    getTableData (){
        let active = true;
        console.log('salamsalam           ', this.state.matchesData['tableBody'])
        const tableBody = this.state.matchesData['tableBody'].map((data) => {
            active = !active
            return(
                    <Table.Row active={active} style={{'width':'100%'}}>
                        <Table.Cell width={2}><a href={data['team1Link']} target='_blank'>{data['team1Name']}</a></Table.Cell>
                        <Table.Cell width={1}>{data['team1Goal']+'-'+data['team2Goal']}</Table.Cell>
                        <Table.Cell width={2}><a href={data['team2Link']} target='_blank'>{data['team2Name']}</a></Table.Cell>
                        <Table.Cell width={1}>{data['date']}</Table.Cell>
                    </Table.Row>
                )
            }
        );
        const tableHeader = this.state.matchesData['tableHeader'].map((data) => {
                return(
                     <Table.HeaderCell style={{backgroundColor:'#bc001a', color:'white'}}> {data}</Table.HeaderCell>
                )
            }
        );
        return(
            <Table>
                <Table.Header>
                    <Table.Row>
                        {tableHeader}
                    </Table.Row>
                </Table.Header>
                <Table.Body>{tableBody}</Table.Body>
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