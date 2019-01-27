import React, {Component} from 'react'
import {Dropdown, Icon, Table} from 'semantic-ui-react'


export default class PlayerRecordTable extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
        this.state = {
            session: this.props.playerRecords['seasons'][0]['value'],

        };
    }


    handleSelect(e, {value}) {
        // console.log(value)
        this.setState({session: value})
    }

    getTableData() {
        let active = true;
        return (
            this.props.playerRecords['tableData'].map((season_statistics) => {
                if (season_statistics['season'] === this.state.session) {
                    return season_statistics['data'].map(({featureName, featureValue}) => {
                        active = !active;
                        return (
                            <Table.Row active={active} columns={2}>
                                <Table.Cell>{featureName}</Table.Cell>
                                <Table.Cell>{featureValue}</Table.Cell>

                            </Table.Row>
                        );
                    })
                }
            })


        )
    };

    render() {
        const options = [
            {value: 1, text: 1},
            {value: 2, text: 2},
        ];
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2' style={{backgroundColor: '#ebc004', color: 'white'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                {this.props.playerRecords['tableName']}
                                <Dropdown text='انتخاب فصل' options={this.props.playerRecords['seasons']} onChange={this.handleSelect}/>
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