import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Template from '../components/template'

const tableData = [
    { name: 'John', age: 15, gender: 'Male' },
    { name: 'Amber', age: 40, gender: 'Female' },
    { name: 'Leslie', age: 25, gender: 'Female' },
    { name: 'Ben', age: 70, gender: 'Male' },
]

class TableExampleSortable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'corner' ? direction : null}
                            onClick={this.handleSort('corner')}
                        >
                            Corner
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'fault' ? direction : null}
                            onClick={this.handleSort('fault')}
                        >
                            Fault
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'goalposition' ? direction : null}
                            onClick={this.handleSort('goalposition')}
                        >
                            Goal position
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'goalnumber' ? direction : null}
                            onClick={this.handleSort('goalnumber')}
                        >
                            Goal number
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'ownershippercentage' ? direction : null}
                            onClick={this.handleSort('ownershippercentage')}
                        >
                            Ownership percentage
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ age, gender, name }) => (
                        <Table.Row key={name}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{age}</Table.Cell>
                            <Table.Cell>{gender}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}

class App extends Component {
    render(){
        return(
            <Template {...this.props} template={{column_2:<TableExampleSortable/>,  width_1:4, width_2:8, width_3:4}} />

        )
    }
}
export default App