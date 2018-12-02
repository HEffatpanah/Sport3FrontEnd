import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Template from '../components/template'


const tableData = [
  { result:'Wine', date:'1998', score:3, wld:"win"  },
  { result:'Wine', date:'1998', score:3, wld:"win"  },
  { result:'Wine', date:'1998', score:3, wld:"win"  },
  { result:'Wine', date:'1998', score:3, wld:"win"  },
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
              sorted={column === 'result' ? direction : null}
              onClick={this.handleSort('result')}
            >
              Result
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'date' ? direction : null}
              onClick={this.handleSort('date')}
            >
              Date
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'score' ? direction : null}
              onClick={this.handleSort('score')}
            >
              Score
            </Table.HeaderCell>
              <Table.HeaderCell
              sorted={column === 'win/lose/draw' ? direction : null}
              onClick={this.handleSort('win/lose/draw')}
            >
              Win/Lose/Draw
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ result, date, score, wld}) => (
            <Table.Row key={result}>
              <Table.Cell>{result}</Table.Cell>
              <Table.Cell>{date}</Table.Cell>
              <Table.Cell>{score}</Table.Cell>
              <Table.Cell>{wld}</Table.Cell>
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
        <Template {...this.props} template={{column_2: <TableExampleSortable/>, width_1:4, width_2:8, width_3:4}} />

    )
  }
}
export default App