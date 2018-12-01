import React, { Component } from 'react';
import {Tab, Pagination, Menu, Step, Label, Icon, Divider, Checkbox, Form, Loader, Segment, Input, Button, Confirm, Radio, Grid } from 'semantic-ui-react'
import './App.css';
import { Slide } from 'react-slideshow-image';
import 'semantic-ui-css/semantic.min.css';

const slideImages = [
  require('./images/horse.jpg'),
  require('./images/horse.jpg'),
  require('./images/horse.jpg')
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const panes = [
  { menuItem: 'فوتبال', render: () => <Tab.Pane>فوتبال</Tab.Pane> },
  { menuItem: 'بسکتبال', render: () => <Tab.Pane>بسکتبال</Tab.Pane> }
]

class MyTAb extends React.Component{
  render(){
    return(
      <Tab panes={panes} />
    )
  }
}

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

class Template extends React.Component {
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
        <Grid style={{ 'height': '100%' }}>
          <Grid.Row columns={1} style={firststyle}>
            <Grid.Column >
              {/* <div>hello</div> */}
              <Navbar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} style={secondstyle}>
            <Grid.Column width={3}>
              <Segment>hello</Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment><MyTAb/></Segment>
            </Grid.Column>
            <Grid.Column width={3}>
              <Segment>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
                <a href="www.google.com">سلام</a><br></br>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} style={thirdstyle}>
            <Grid.Column >
              <Segment>hello</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

class App extends Component {


  render() {
    return (
      <div style={{ 'direction': 'rtl', 'padding':'10px' }}>
        {/* <MyTabular/> */}
        <Template />
        {/* <MyLoader/>
        <SearchInput/>
        <SignUp/>
        <Segment padded>
        <Slides/>
        <DividerH/>
        <ConfirmModule/>
        </Segment>
        <EnableDisable/>
        <LabelIcon/>
        <MyStep/>
        <MyPagination/> */}
      </div>
    );
  }
}
export default App;