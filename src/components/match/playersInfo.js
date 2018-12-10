import React, {Component} from 'react'
import {Segment, Table} from 'semantic-ui-react'

export default class sInfo extends Component {
    getOriginalPlayers() {
        return (
            this.props.playerInfo['originalPlayers'].map(({Name,Goals,Post,YellowCards,
                                                              RedCards,ReplaceTime}) => {
                let i;
                let goals = [];
                let yellow = null;
                let replace = null;
                let shirt = null;
                if(Post==='goalkeeper')
                    shirt=<img src={require("../../images/shirt-icon_b.png")}/>
                else shirt=<img src={require("../../images/shirt-icon_w.png")}/>
                for (i=0;i<Goals;i++) {
                        goals.push(<img src={require("../../images/goal.png")}/>);
                    }
                    if(YellowCards!==0)
                        yellow=(<div style={{display:'inline-block'}}><img src={require("../../images/yc.png")}/>{YellowCards}</div>);
                    if(ReplaceTime!==null)
                        replace=(<div style={{display:'inline-block'}}><img src={require("../../images/subout.png")}/>{ReplaceTime}</div>);
                    return (
                        <Table.Row style={{textAlign:this.props.direction}} columns={4}>
                            <Table.Cell collapsing style={{color:'green'}}>{Name} {shirt}</Table.Cell>
                            <Table.Cell style={{textAlign:'left'}}>{yellow} {replace} {goals}</Table.Cell>
                        </Table.Row>
                    );
                }
            )

        )
    };
    getSubstitutesPlayers() {
        return (
            this.props.playerInfo['substitutesPlayers'].map(({Name,Goals,Post,YellowCards,
                                                                 RedCards,ReplaceTime}) => {
                    let i;
                let goals = [];
                let yellow = null;
                let replace = null;
                let shirt = null;
                if(Post==='goalkeeper')
                    shirt=<img src={require("../../images/shirt-icon_b.png")}/>
                else shirt=<img src={require("../../images/shirt-icon_w.png")}/>
                    for (i=0;i<Goals;i++) {
                        goals.push(<img src={require("../../images/goal.png")}/>);
                    }
                    if(YellowCards!==0)
                        yellow=(<div style={{display:'inline-block'}}><img src={require("../../images/yc.png")}/>{YellowCards}</div>);
                    if(ReplaceTime!==null)
                        replace=(<div style={{display:'inline-block'}}><img src={require("../../images/subin.png")}/>{ReplaceTime}</div>);
                    return (
                        <Table.Row>
                            <Table.Cell collapsing style={{color:'red'}}>{Name} {shirt}</Table.Cell>
                            <Table.Cell style={{textAlign:'left'}}>{yellow} {replace} {goals}</Table.Cell>
                        </Table.Row>
                    );
                }
            )

        )
    };

    render() {
        return (
            <Table>
                {this.getOriginalPlayers()}
                {this.getSubstitutesPlayers()}
            </Table>
        );
    }
}