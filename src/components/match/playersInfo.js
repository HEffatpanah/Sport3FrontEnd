import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'

export default class PlayersInfo extends Component {
    getTableData() {
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
                {this.getTableData()}
            </Table>
        );
    }
}