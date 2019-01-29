import React, {Component} from 'react'
import {Segment, Table} from 'semantic-ui-react'
let active=false;
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
                    if(Post==='دروازه بان')
                        shirt=<img src={require("../../images/shirt-icon_b.png")}/>
                    else shirt=<img src={require("../../images/shirt-icon_w.png")}/>
                    for (i=0;i<Goals;i++) {
                        goals.push(<img src={require("../../images/goal.png")}/>);
                    }
                    if(YellowCards!==0)
                        yellow=(<div style={{display:'inline-block'}}><img src={require("../../images/yc.png")}/>{YellowCards}</div>);
                    if(ReplaceTime!=='null')
                        replace=(<div style={{display:'inline-block'}}><img src={require("../../images/subout.png")}/>{ReplaceTime}</div>);
                    active=!active;

                    return (
                        <Table.Row backgroundColor={'blue'} active={active}>
                            <Table.Cell id='first' collapsing style={{color:'green'}}>{shirt} {Name}</Table.Cell>
                            <Table.Cell style={{textAlign:localStorage.getItem('I_align')}}>{yellow} {replace} {goals}</Table.Cell>
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
                    if(Post==='دروازه بان')
                        shirt=<img src={require("../../images/shirt-icon_b.png")}/>
                    else shirt=<img src={require("../../images/shirt-icon_w.png")}/>
                    for (i=0;i<Goals;i++) {
                        goals.push(<img src={require("../../images/goal.png")}/>);
                    }
                    if(YellowCards!==0)
                        yellow=(<div style={{display:'inline-block'}}><img src={require("../../images/yc.png")}/>{YellowCards}</div>);
                    if(ReplaceTime!=='null')
                        replace=(<div style={{display:'inline-block'}}><img src={require("../../images/subin.png")}/>{ReplaceTime}</div>);
                    active=!active;
                    return (
                        <Table.Row style={{backgroundColor:'#f5e4de'}}>
                            <Table.Cell collapsing style={{color:'red'}}>{shirt} {Name}</Table.Cell>
                            <Table.Cell style={{textAlign:localStorage.getItem('I_align')}}>{yellow} {replace} {goals}</Table.Cell>
                        </Table.Row>
                    );
                }
            )

        )
    };

    render() {
        active=false;
        return (
            <Table>
                {this.getOriginalPlayers()}
                {this.getSubstitutesPlayers()}
            </Table>
        );
    }
}