import React, { Component } from 'react'
import {Dropdown, Icon, Table} from 'semantic-ui-react'


export default class PlayerRecordTable extends Component{
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
    }
    state={
        session:1,
    };

    handleSelect(e, {value}){
        // console.log(value)
        this.setState({session:value})
    }
    getTableData () {
        return (
            this.props.playerRecords['tableData' + this.state.session].map(({featureName, featureValue}) => {
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
        const options = [
            { value: 1, text: 1 },
            { value: 2, text: 2 },
        ];
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2' style={{direction:'rtl'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                {this.props.playerRecords['tableName']}
                                <Dropdown text='انتخاب فصل' options={options} onChange={this.handleSelect}/>
                            </div>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.getTableData()}
                </Table.Body>
            </Table>
        );
    }
}