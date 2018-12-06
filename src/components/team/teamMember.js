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
        column:null
    };

    handleSort = clickedColumn => () => {
        const {data, column, direction} = this.state;
        if (column !== clickedColumn) {
            this.setState({
                data:_.sortBy(data, [clickedColumn]),
                column: clickedColumn,
                direction: 'ascending',
            });

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };

    handleFilter = (selectedOption, {value}) => {
        this.setState({ filterItem: value, filterEnable:true });

    };
    handleCheckBox = () => {
        this.setState({filterEnable:!this.state.filterEnable});
    };
    static getMemberName(name, isPlayer){
        if(isPlayer){
            return(
                <a style={{color:'#00339e'}} href={'/players/'+name}>{name}</a>
            );
        }
        else{
            return name;
        }
    }
    render() {
        const options = [
            { text:'حمله', value: 'حمله', style:{textAlign:'center'}},
            { text:'دفاع', value: 'دفاع', style:{textAlign:'center'}},
        ];
        const {column, direction} = this.state;
        const body = _.map(this.state.data, ({ name, age, position, photo, isPlayer}) => {
            if(this.state.filterEnable){
                if(position===this.state.filterItem)
                    return (
                        <Table.Row style={{direction:'rtl'}}>
                            <Table.Cell>{TeamMembers.getMemberName(name, isPlayer)}</Table.Cell>
                            <Table.Cell>{age}</Table.Cell>
                            <Table.Cell>{position}</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>{photo}</Table.Cell>
                        </Table.Row>
                    )
            }

            else
                return(
                    <Table.Row>
                        <Table.Cell>{TeamMembers.getMemberName(name, isPlayer)}</Table.Cell>
                        <Table.Cell>{age}</Table.Cell>
                        <Table.Cell>{position}</Table.Cell>
                        <Table.Cell style={{textAlign: 'center'}}>{photo}</Table.Cell>
                    </Table.Row>
                )
        });

        return (
            <div>
                <Segment style={{direction:'rtl'}}>
                    <Grid style={{backgroundColor:'#f8ffc8'}}>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Checkbox slider label='فعال کردن فیلتر' checked={this.state.filterEnable} onClick={this.handleCheckBox}/>
                            </Grid.Column>
                            <Grid.Column style={{textAlign:'left'}}>
                                <Dropdown  text='فیلتر پست ها' icon='filter'>
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
                                <Table sortable celled fixed style={{backgroundColor:'#008b3f'}}>
                                    <Table.Header >
                                        <Table.Row>
                                            <Table.HeaderCell
                                                sorted={column === 'name' ? direction : null}
                                                onClick={this.handleSort('name')}
                                            >
                                                نام
                                            </Table.HeaderCell>
                                            <Table.HeaderCell
                                                sorted={column === 'age' ? direction : null}
                                                onClick={this.handleSort('age')}
                                            >
                                                سن
                                            </Table.HeaderCell>
                                            <Table.HeaderCell
                                                sorted={column === 'position' ? direction : null}
                                                onClick={this.handleSort('position')}
                                            >
                                                پست
                                            </Table.HeaderCell>
                                            <Table.HeaderCell>
                                                عکس</Table.HeaderCell>
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