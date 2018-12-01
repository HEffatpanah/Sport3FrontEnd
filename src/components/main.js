import React, { Component } from 'react';
import { Tab, Pagination, Menu, Step, Label, Icon, Divider, Checkbox, Form, Loader, Segment, Input, Button, Confirm, Radio, Grid } from 'semantic-ui-react'
// import './App.css';
import { Slide } from 'react-slideshow-image';
import 'semantic-ui-css/semantic.min.css';
import Template from './template.js'


const panes = [
  { menuItem: 'مورد علاقه', render: () => <Tab.Pane>مورد علاقه</Tab.Pane> },
  { menuItem: 'آخرین', render: () => <Tab.Pane>آخرین</Tab.Pane> }
]

class MyTAb extends React.Component {
  render() {
    return (
      <Tab panes={panes} />
    )
  }
}





class main extends Component {


  render() {
    const football_news =
      <Segment>
        <div>فوتبال</div>
        <MyTAb />
      </Segment>;
    const basketball_news =
      <Segment>
        <div>بسکتبال</div>
        <MyTAb />
      </Segment>;
    const news =
      <Segment>
        <a id="ew" href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
        <a href="www.google.com">اخبار</a><br></br>
      </Segment>
    return (



      <div style={{ 'direction': 'rtl', 'padding': '10px' }}>      
        <Template template={{ column_1: <Segment>تبلیغات</Segment>, column_2: football_news, column_3: basketball_news, column_4:news, column_5: <div>نظرات کاربران</div> }} />
      </div>
    );
  }
}
export default main;