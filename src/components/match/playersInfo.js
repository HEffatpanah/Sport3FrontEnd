import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'

export default class PlayersInfo extends Component {
    getTableData() {
        return (
            this.props.playerInfo['originalPlayers'].map(({playerName,playerGoals,playerYellowCards,
                                                              playerRedCards,playerReplaceTime}) => {
                var i;
                var goals = [];
                var yellow=null;
                var replace=null;
                for (i=0;i<playerGoals;i++) {
                    goals.push(<img src={require("../../images/goal.png")}/>);
                }
                if(playerYellowCards!==null)
                    yellow=(<div style={{display:'inline-block'}}><img src={require("../../images/yc.png")}/>{playerYellowCards}</div>);
                if(playerReplaceTime!==null)
                    replace=(<div style={{display:'inline-block'}}><img src={require("../../images/subout.png")}/>{playerReplaceTime}</div>);
                    return (
                        <Table.Row style={{textAlign:this.props.direction}} columns={4}>
                            <Table.Cell>{yellow} {replace} {goals}</Table.Cell>
                            <Table.Cell collapsing>{playerName}</Table.Cell>
                        </Table.Row>
                    );
                }
            )

        )
    };

    render() {
        return (
            <Table>
                {this.getTableData()}
            </Table>
        );
    }
}