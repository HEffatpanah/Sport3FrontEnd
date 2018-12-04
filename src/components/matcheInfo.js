import _ from 'lodash'
import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'


export default class MatcheInfo extends Component {

    render() {
        const info = this.props.matchInfo;

        return (
            <Table.Row>
                <Table.Cell>{info['owerTeamGoal']+'-'+info['opponentTeamGoal']}</Table.Cell>
                <Table.Cell>{info['date']}</Table.Cell>
                <Table.Cell>{info['score']}</Table.Cell>
                <Table.Cell>{info['status']}</Table.Cell>
            </Table.Row>
        )
    }
}
