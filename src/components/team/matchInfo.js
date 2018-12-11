import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
import _ from "lodash";
import {Translate} from "react-localize-redux";


export default class MatchesTable extends Component{
    state ={
        matchesData:this.props.matchesData,
        column:null,
        direction:null
    };
    handleSort = clickedColumn => () => {
        const {matchesData, column, direction} = this.state;
        if (column !== clickedColumn) {
            this.setState({
                matchesData:_.sortBy(matchesData, [clickedColumn]),
                column: clickedColumn,
                direction: 'ascending',
            });

            return
        }

        this.setState({
            matchesData: matchesData.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };

    getTableData (){
        return(
            this.state.matchesData.map((data) => {
                    return(
                        <Table.Row>
                            <Table.Cell>{data['owerTeamGoal']+'-'+data['opponentTeamGoal']}</Table.Cell>
                            <Table.Cell>{data['date']}</Table.Cell>
                            <Table.Cell>{data['score']}</Table.Cell>
                            <Table.Cell>{data['status']}</Table.Cell>
                            <Table.Cell><a href={data['opponentLink']} target='_blank'>{data['opponent']}</a></Table.Cell>
                        </Table.Row>

                        // <MatchInfo matchData={data}/>
                )
                }
            )
        )
    };
    render() {
        const {column, direction} = this.state;
        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell

                        >
                            {<Translate id="result" />}
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'date' ? direction : null}
                            onClick={this.handleSort('date')}
                        >
                            {<Translate id="date" />}
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'score' ? direction : null}
                            onClick={this.handleSort('score')}
                        >
                            {<Translate id="point" />}
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'win/lose/draw' ? direction : null}
                            onClick={this.handleSort('win/lose/draw')}
                        >
                            {<Translate id="status" />}</Table.HeaderCell>
                        <Table.HeaderCell
                        >
                            {<Translate id="opponent" />}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.getTableData()}
                </Table.Body>
            </Table>
        );
    }
}