import React,{Component} from "react";
import {Grid, Table} from "semantic-ui-react";


export default class TimeLine extends Component{
    getMinutes(){
        let tableCells = [];
        for (let i=1;i<this.props.minutes + 1;i++){
                tableCells.push(
                    <Table.Cell style={{verticalAlign: 'bottom', fontSize: '1.2em', textAlign: 'center', backgroundColor:'#0ef9ff'}}>
                        <strong>{i % 5 === 0 ? i : ''}</strong>
                    </Table.Cell>
                )

        }
        return tableCells;
    }
    getEvents(teamNumber, posotion){
        let tableCellsValue = new Array(this.props.minutes);
        let tableCells = [];
        const eventInfo =  this.props.matchData['team'+teamNumber]['events'];
            eventInfo.map(({featureName, featureValue}) =>{
            switch (featureName) {
                case 'yc':
                    featureValue.map((minute) => {
                        tableCellsValue[minute - 1] = <img src={require('../../images/yc.png')}/>

                    });
                    break;
                case 'drc':
                    featureValue.map((minute) => {
                        tableCellsValue[minute - 1] = <img src={require('../../images/rc.png')}/>
                    });
                    break;
                case 'syc':
                    featureValue.map((minute) => {
                        tableCellsValue[minute - 1] = <img src={require('../../images/syc.png')}/>
                    });
                    break;
                case 'g':
                    featureValue.map((minute) => {
                        tableCellsValue[minute - 1] = <img src={require('../../images/goal.png')}/>
                    });
                    break;
                case 's':
                    featureValue.map((minute) => {
                        tableCellsValue[minute - 1] = <img src={require('../../images/subin_out.png')}/>
                    });
                    break;

            }
        })
        for (let i = 0;i < this.props.minutes;i++){
            tableCells.push(<Table.Cell style={{verticalAlign: {posotion}, fontSize: '1em', textAlign: 'center'}}>{tableCellsValue[i]}</Table.Cell>);
        }
        return tableCells
    }
    render() {
        return (
            <Table style={{background:'none',  border:'none'}}>
                <Table.Row >
                    {this.getEvents(1, 'bottom')}
                </Table.Row>
                <Table.Row >
                    {this.getMinutes()}
                </Table.Row>
                <Table.Row >
                    {this.getEvents(2, 'top')}
                </Table.Row>
            </Table>
        );
    }
}