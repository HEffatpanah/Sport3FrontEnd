import React, {Component} from 'react'
import {Grid, Menu, Segment, Tab} from 'semantic-ui-react'


export default class NewLeague extends Component {
    state = {activeItem: 'فوتبال'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    getTableContent() {
        return (
            this.props.leaguesData.map((leagueData) => {
                return (
                    <div>
                        <div style={{backgroundColor: '#c1c1c1', margin:'0.5vh auto'}}>
                            {leagueData['leagueName']}
                        </div>
                        <div>
                            {leagueData['sessions'].map((session) => {
                                return(
                                    <a style={{display:'inline-block', margin:'0.5vh 1vw', color:'black'}} onClick={this.handleLink}>{session}</a>
                                )
                            })}
                        </div>
                    </div>
                )
            })

        )
    }

    render() {
        return (
            <Segment >
                <div style={{textAlign:'center', fontSize:'1.5em'}}>
                    لیگ های جدید
                </div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='فوتبال'
                        style={{width: '50%'}}
                        onClick={this.handleItemClick}
                        active={this.state.activeItem === 'فوتبال'}
                    />
                    <Menu.Item
                        style={{width: '50%  '}}
                        name='بسکتبال'
                        active={this.state.activeItem === 'بسکتبال'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                <div>
                    {this.getTableContent()}
                </div>
            </Segment>
        );
    }

}