import React, {Component} from 'react';
import {Table} from "semantic-ui-react";

export default class LeagueTable extends Component {
    getTableRows() {
        let active = false;
        let counter = 0;
        return this.props.leagueData['tableData'].map((rows) => {
            const row = rows.map((value) => {
                    return (
                        <Table.Cell>
                            {value}
                        </Table.Cell>
                    )
                }
            );
            active = !active;
            counter += 1;
            return (<Table.Row active={active}>
                {row} <Table.Cell>{counter}</Table.Cell>
            </Table.Row>)
        })
    }

    getHeader() {
        return (
            <Table.Header>
                <Table.Row style={{backgroundColor: '#2ecc71', color: 'white'}}>
                    <Table.Cell colSpan='11' style={{textAlign: 'center'}}>
                        {this.props.leagueData['tableName']}
                    </Table.Cell>
                </Table.Row>
                <Table.Row style={{backgroundColor: '#656565', color: 'white'}}>

                    {this.props.leagueData['header'].map((value) => {
                        return (
                            <Table.Cell>{value}</Table.Cell>
                        )
                    })}
                    <Table.Cell>
                    </Table.Cell>
                </Table.Row>
            </Table.Header>

        )
    }

    render() {
        return (
            <div>
                <div style={{textAlign:'center', fontSize:'1.5em'}}>{this.props.leagueData['leagueName']}</div>
            <Table structured>
                {this.getHeader()}
                <Table.Body>
                    {this.getTableRows()}
                </Table.Body>
            </Table>
            </div>
        );
    }
}