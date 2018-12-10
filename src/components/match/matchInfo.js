import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'


export default class MatchInfo extends Component{
    constructor(props) {
        super(props);
    }

    getTableData () {
        return (
            this.props.matchRecord['generalRecords'].map(({featureName, featureValue}) => {
                    return (
                        <Table.Row style={{textAlign:this.props.direction}} columns={2}>
                            <Table.Cell>{featureName}</Table.Cell>
                            <Table.Cell style={{textAlign:'left'}}>{featureValue}</Table.Cell>
                        </Table.Row>
                    );
                }
            )

        )
    };
    render() {
        return (
            <Table >
                <Table.Body >
                    {this.getTableData()}
                </Table.Body>
            </Table>
        );
    }
}