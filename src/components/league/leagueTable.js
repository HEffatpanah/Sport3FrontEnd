import React, {Component} from 'react';
import {Table} from "semantic-ui-react";

export default class LeagueTable extends Component {
    getTableRows() {
        let active = true;
        let counter = 1;

        return this.props.leagueData.map((leagues) => {
            if (leagues['leagueName'] === this.props.session) {
                return leagues['tableData'].map(({teamInfo}) => {

                    let cells = [<Table.Cell>{counter}</Table.Cell>];
                    counter += 1;
                    teamInfo.map(({featureName, featureValue, featureLink}) =>{
                        if (featureLink)
                            cells.push(
                                <Table.Cell><a href={featureLink}>{featureValue}</a></Table.Cell>
                            );
                        else
                            cells.push(
                                <Table.Cell>
                                    {featureValue}
                                </Table.Cell>
                            );


                    });
                    active = !active;
                    return (
                            <Table.Row active={active}>
                                {cells}
                            </Table.Row>
                        )


                })

            }
            else {
                return null;
            }
        })
    }

    getHeader() {
        {
            return this.props.leagueData.map((leagues) => {
                console.log(this.props.session, leagues['leagueName'] );
                if (leagues['leagueName'] === this.props.session) {
                    return (
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell colSpan='11' style={{textAlign: 'center'}}>
                                    {leagues['tableName']}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row  style={{backgroundColor: '#179c36', color: 'white'}}>
                                <Table.Cell colSpan='11' style={{textAlign: 'center'}}>
                                    {leagues['leagueName']}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row style={{backgroundColor: '#656565', color: 'white'}}>
                                <Table.Cell>
                                </Table.Cell>
                                {leagues['header'].map((value) => {
                                    return (
                                        <Table.Cell>{value}</Table.Cell>
                                    )
                                })}
                            </Table.Row>

                        </Table.Header>
                    )
                }
            });
            // return (
            //     <Table.Header>
            //
            //         <Table.Row style={{backgroundColor: '#179c36', color: 'white'}}>
            //             <Table.Cell colSpan='11' style={{textAlign: 'center'}}>
            //                 {this.props.leagueData['tableName']}
            //             </Table.Cell>
            //         </Table.Row>
            //         <Table.Row style={{backgroundColor: '#656565', color: 'white'}}>
            //             <Table.Cell>
            //             </Table.Cell>
            //             {this.props.leagueData['header'].map((value) => {
            //                 return (
            //                     <Table.Cell>{value}</Table.Cell>
            //                 )
            //             })}
            //
            //         </Table.Row>
            //     </Table.Header>
            //
            // )
        }
    }
    render() {
        return (
            <div>
                <div style={{textAlign: 'center', fontSize: '1.5em'}}>{this.props.leagueData['leagueName']}</div>
                <Table structured>
                    {this.getHeader()}
                    <Table.Body>
                        {this.getTableRows()}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}