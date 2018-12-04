import {Component} from "react";
import _ from "lodash";
import {Checkbox, Table} from "semantic-ui-react";
import {Segment} from "semantic-ui-react";
import {Grid} from "semantic-ui-react";
import {Dropdown} from "semantic-ui-react";
import React from "react";

export default class TeamMembers extends Component{
    state = {
        data: this.props.teamMembersData,
        direction: null,
        filterItem: null,
        filterEnable:false,
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

    handleFilter = (selectedOption, {value}) => {
        this.setState({ filterItem: value, filterEnable:true });

    };
    handleCheckBox = () => {
        this.setState({filterEnable:!this.state.filterEnable});
    };
    render() {
        const options = [
            { text:'forward', value: 'forward', style:{textAlign:'center'}},
            { text:'defence', value: 'defence', style:{textAlign:'center'}},
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

        return (
            <div>
                <Segment>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Checkbox slider label='filter enable' checked={this.state.filterEnable} onClick={this.handleCheckBox}/>
                            </Grid.Column>
                            <Grid.Column style={{textAlign:'right'}}>
                                <Dropdown  text='Filter Positions' icon='filter'>
                                    <Dropdown.Menu >
                                        {/*<Dropdown placeholder='Select Sport' search selection options={options} onChange={(e,{value}) => {console.log(value)}}/>*/}
                                        <Dropdown.Menu scrolling >
                                            {options.map(option => <Dropdown.Item  {...option} onClick={this.handleFilter}/>)}
                                        </Dropdown.Menu>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Table sortable celled fixed style={{}}>
                                    <Table.Header >
                                        <Table.Row>
                                            <Table.HeaderCell
                                                // sorted={column === 'name' ? direction : null}
                                                onClick={this.handleSort('name')}
                                            >
                                                Name
                                            </Table.HeaderCell>
                                            <Table.HeaderCell
                                                // sorted={column === 'age' ? direction : null}
                                                onClick={this.handleSort('age')}
                                            >
                                                Age
                                            </Table.HeaderCell>
                                            <Table.HeaderCell
                                                // sorted={column === 'position' ? direction : null}
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