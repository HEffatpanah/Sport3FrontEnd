import _ from 'lodash'
import React, { Component } from 'react'
import {Checkbox, Grid, Segment, Table} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';


const matchData = [
    { result:'3-0', date:'1998-09-12', score:3, status:"win"  },
    { result:'3-0', date:'1998-09-12', score:3, status:"win"  },
    { result:'3-0', date:'1998-09-12', score:3, status:"win"  },
    { result:'3-0', date:'1998-09-12', score:3, status:"win"  },
]

class MatchesTable extends Component {
    state = {
        column: null,
        data: matchData,
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
            <Table sortable celled fixed style={{}}>
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
                            Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ result, date, score, status}) => (
                        <Table.Row key={result}>
                            <Table.Cell>{result}</Table.Cell>
                            <Table.Cell>{date}</Table.Cell>
                            <Table.Cell>{score}</Table.Cell>
                            <Table.Cell>{status}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}

const center_vertically={
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
}


const image_style={
    height:'8vh',
    width:'5vw',
}

const membersData = [
    { name:'ali', age:'22', position:'forward', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
    { name:'mahdi', age:'25', position:'defence', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
    { name:'taha', age:'21', position:'forward', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
    { name:'mammad', age:'29', position:'defence', photo:<img style={image_style} src={require('../images/horse.jpg')}/>},
]

class TeamMembers extends Component{
    state = {
        column: null,
        // data: _.sortBy(membersData, ['name']),
        data: membersData,
        direction: null,
        filterItem: null,
        filterEnable:false,
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
    handleSelectorChange = (selectedOption) => {
        this.setState({ filterItem:selectedOption.value });

    };
    handleCheckBox = () => {
        if(this.state.filterEnable){
            this.setState({filterEnable:false})
        }
        else{
            this.setState({filterEnable:true})
        }
    };
    render() {
        const options = [
            { value: 'forward', label: 'forward' },
            { value: 'defence', label: 'defence' },
        ];

        const body = _.map(this.state.data, ({ name, age, position, photo}) => {
            if(this.state.filterEnable){
                if(position===this.state.filterItem)
                return (
                    <Table.Row>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{age}</Table.Cell>
                        <Table.Cell>{position}</Table.Cell>
                        <Table.Cell style={{textAlign: 'center'}}>{photo}</Table.Cell>
                    </Table.Row>
                )
            }

            else
                return(
                    <Table.Row>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{age}</Table.Cell>
                        <Table.Cell>{position}</Table.Cell>
                        <Table.Cell style={{textAlign: 'center'}}>{photo}</Table.Cell>
                    </Table.Row>
                )
        });

        const { column, data, direction } = this.state;
        return (
            <div>
                <Segment>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={13}>
                                <Select placeholder='Select Position' search selection options={options} onChange={this.handleSelectorChange}/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Checkbox style={center_vertically} label='Filter' onChange={this.handleCheckBox} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Table sortable celled fixed style={{}}>
                                    <Table.Header >
                                        <Table.Row>
                                            <Table.HeaderCell
                                                sorted={column === 'name' ? direction : null}
                                                onClick={this.handleSort('name')}
                                            >
                                                Name
                                            </Table.HeaderCell>
                                            <Table.HeaderCell
                                                sorted={column === 'age' ? direction : null}
                                                onClick={this.handleSort('age')}
                                            >
                                                Age
                                            </Table.HeaderCell>
                                            <Table.HeaderCell
                                                sorted={column === 'position' ? direction : null}
                                                onClick={this.handleSort('position')}
                                            >
                                                Position
                                            </Table.HeaderCell>
                                            <Table.HeaderCell>
                                                Photo</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>{body}
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const news =
    <Segment>

        <a id="ew" href="https://www.google.com">news</a><br/>
        <a href="https://www.google.com">ews</a><br/>
        <a href="https://www.google.com">news</a><br/>
        <a href="https://www.google.com">news</a><br/>
        <a href="https://www.google.com">news</a><br/>
        <a href="https://www.google.com">news</a><br/>
        <a href="https://www.google.com">news</a><br/>
        <a href="https://www.google.com">news</a><br/>
    </Segment>;


class App extends Component {
    render(){
        return(
            <Template {...this.props} template={{column_1: <MatchesTable/>, column_2:<TeamMembers/>, column_3:news, width_1:4, width_2:8, width_3:4}} />

        )
    }
}
export default App