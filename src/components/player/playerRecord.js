import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'


export default class PlayerRecordTable extends Component{
    getTableData () {
        return (
            this.props.playerInfo['tableData'].map(({featureName, featureValue}) => {
                    return (
                        <Table.Row columns={2}>
                            <Table.Cell>{featureValue}</Table.Cell>
                            <Table.Cell>{featureName}</Table.Cell>

                        </Table.Row>
                    );
                }
            )

        )
    };
    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>{this.props.playerInfo['tableName']}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.getTableData()}
                </Table.Body>
            </Table>
        );
    }
}