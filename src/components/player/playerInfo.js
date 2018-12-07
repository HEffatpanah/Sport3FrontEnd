import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'


export default class PlayerInfoTable extends Component{
    getTableData () {

        const image_style = {
            height: '16vh',
            width: '10vw',
        };
        return (
            this.props.playerInfo['tableData'].map(({featureName, featureValue}) => {
                    console.log(featureName);
                    console.log(featureValue);
                    if (featureName === 'image') {
                        return (
                            <Table.Row>
                                <Table.Cell><img style={image_style} src={require('../../' + featureValue)}/></Table.Cell>
                                <Table.Cell style={{textAlign: 'center'}}>{this.props.playerInfo['tableName']}</Table.Cell>
                            </Table.Row>
                        )
                    }
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
                <Table.Body>
                    {this.getTableData()}
                </Table.Body>
            </Table>
        );
    }
}