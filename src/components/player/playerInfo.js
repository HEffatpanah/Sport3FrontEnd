import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'
import _ from "lodash";



class PlayerInfo extends Component {

    render() {

        console.log('salam');
        const info = this.props.playerData;
        return (
            <Table.Row>
                <Table.Cell>{info['position']}</Table.Cell>
                <Table.Cell>{info['nationality']}</Table.Cell>
                <Table.Cell>{info['currentTeam']}</Table.Cell>
                <Table.Cell>{info['weight']}</Table.Cell>
                <Table.Cell>{info['height']}</Table.Cell>
                <Table.Cell>{info['age']}</Table.Cell>
                <Table.Cell>{info['name']}</Table.Cell>
            </Table.Row>
        )
    }
}


export default class PlayerInfoTable extends Component{
    state ={
        playerData:this.props.playerData,
        column:null,
        direction:null
    };
    getTableData (){
        console.log(this.state.playerData)
        return(
            this.state.playerData.map((data) => {
                    return(
                        <PlayerInfo playerData={data}/>
                    )
                }
            )
        )
    };
    render() {
        return (
            <Table celled fixed style={{backgroundColor:'#00718b'}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            پست
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            ملیت
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            تیم کنونی
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            وزن
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            قد
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            سن
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            نام
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