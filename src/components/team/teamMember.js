import {Component} from "react";
import _ from "lodash";
import {Checkbox, Table} from "semantic-ui-react";
import {Grid} from "semantic-ui-react";
import {Dropdown} from "semantic-ui-react";
import React from "react";
import {getTranslate, Translate} from "react-localize-redux";

export default class TeamMembers extends Component {
    state = {
        data: this.props.teamMembersData,
        direction: null,
        filterItem: null,
        filterEnable: false,
        column: null
    };

    handleSort = clickedColumn => () => {
        const {data, column, direction} = this.state;
        if (column !== clickedColumn) {
            this.setState({
                data: _.sortBy(data, [clickedColumn]),
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
        this.setState({filterItem: value, filterEnable: true});

    };
    handleCheckBox = (e, {checked}) => {
        this.setState({filterEnable: !this.state.filterEnable, filterItem: null});
    };

    static getMemberName(name, isPlayer, link) {
        if (isPlayer) {
            return (
                <a href={link} target='_blank'>{name}</a>
            );
        }
        else {
            return name;
        }
    }

    render() {
        const options = [
            {text: 'حمله', value: 'حمله', style: {textAlign: 'center'}},
            {text: 'دفاع', value: 'دفاع', style: {textAlign: 'center'}},
            {text: 'هافبک میانی', value: 'هافبک میانی', style: {textAlign: 'center'}},
            {text: 'دروازه بان', value: 'دروازه بان', style: {textAlign: 'center'}},
            {text: 'هافبک کناری', value: 'هافبک کناری', style: {textAlign: 'center'}},
        ];
        const {column, direction} = this.state;
        let active = true;
        const body = this.props.teamMembersData['tableBody'].map(({memberInfo}) => {

            let show = false;
            let rowItems = [];
            memberInfo.map(({featureName, featureValue, featureLink}) => {
                if (featureValue === this.state.filterItem||!this.state.filterEnable) {
                    show = true
                }
                if (featureName === 'photo') {
                    rowItems.push(<Table.Cell style={{textAlign:'center'}}><img style={{width: '5vw', height: '9vh'}}
                                                   src={require("../../../../Backend/images/" + featureValue)}/></Table.Cell>)
                }
                else {
                    if (featureLink)
                        rowItems.push(<Table.Cell><a href={featureLink}>{featureValue}</a></Table.Cell>)
                    else
                        rowItems.push(<Table.Cell>{featureValue}</Table.Cell>)
                }

            });
            if (show) {
                active = !active;
                return (
                    <Table.Row active={active}>
                        {rowItems}
                    </Table.Row>
                )
            }


        });
        const header = this.props.teamMembersData['tableHeader'].map((headerTitle) => {
            return (
                <Table.HeaderCell
                    style={{backgroundColor:'#bc001a', color:'white'}}
                    sorted={column === headerTitle ? direction : null}
                    onClick={this.handleSort(headerTitle)}
                >
                    {headerTitle}
                </Table.HeaderCell>

            )
        });
        console.log(this.props);
        return (
            <div>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Translate>
  {({ translate }) => <Checkbox slider label={translate('enable filter')} checked={this.state.filterEnable}
                                      onClick={this.handleCheckBox}/>}
</Translate>

                        </Grid.Column>
                        <Grid.Column style={{textAlign: localStorage.getItem('I_align')}}>
                            <Dropdown text={<Translate id="posts filter"/>} icon='filter'>
                                <Dropdown.Menu>
                                    {/*<Dropdown placeholder='Select Sport' search selection options={options} onChange={(e,{value}) => {console.log(value)}}/>*/}
                                    <Dropdown.Menu scrolling>
                                        {options.map(option => <Dropdown.Item  {...option}
                                                                               onClick={this.handleFilter}/>)}
                                    </Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Table sortable celled fixed structured>
                                <Table.Header>
                                    <Table.Row>
                                        {header}
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {body}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}