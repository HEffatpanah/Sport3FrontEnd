import React from "react";
import { Menu,Grid } from 'semantic-ui-react'

class Navbar extends React.Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                    position='left'
                    style={{ 'color': 'red' }}
                />
            </Menu>
        )
    }
}

export default class Template extends React.Component {
    render() {
        const firststyle = {
            // 'border': '1px solid brown',
            'height': '10%'
        }
        const secondstyle = {
            // 'border': '1px solid brown',
            'height': '80%'
        }
        const thirdstyle = {
            // 'border': '1px solid brown',
            'height': '10%'
        }
        return (
            <div style={{ 'height': '100vh' }}>
                <Grid divided style={{ 'height': '100%' }}>
                    <Grid.Row columns={1} style={firststyle}>
                        <Grid.Column >
                            <Navbar />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3} style={secondstyle}>
                        <Grid.Column width={3}>
                            <div>{this.props.template.column_1}</div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div>{this.props.template.column_2}</div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div>{this.props.template.column_3}</div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} style={thirdstyle}>
                        <Grid.Column >
                            <div>{this.props.template.column_4}</div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}