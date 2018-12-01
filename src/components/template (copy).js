import React from "react";
import { Menu,Grid } from 'semantic-ui-react'

class Navbar extends React.Component {
    state = { activeItem: 'خانه' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
      const { activeItem } = this.state
      return (
        <Menu secondary>
          <Menu.Item
            name='خانه'
            active={activeItem === 'خانه'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='تیم ها'
            active={activeItem === 'تیم ها'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='بازیکن ها'
            active={activeItem === 'بازیکن ها'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='ورود یا ثبت نام'
            active={activeItem === 'ورود یا ثبت نام'}
            onClick={this.handleItemClick}
            position='left'
          />
          {/* <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu> */}
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
                <Grid  style={{ 'height': '100%' }}>
                    <Grid.Row columns={1} style={firststyle}>
                        <Grid.Column >
                            <Navbar />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4} style={secondstyle}>
                        <Grid.Column width={3}>
                            <div>{this.props.template.column_1}</div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <div>{this.props.template.column_2}</div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <div>{this.props.template.column_3}</div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div>{this.props.template.column_4}</div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} style={thirdstyle}>
                        <Grid.Column >
                            <div>{this.props.template.column_5}</div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}