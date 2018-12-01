import React, { Component } from 'react';
import { Table, Pagination, Menu, Step, Label, Icon, Divider, Checkbox, Form, Loader, Segment, Input, Button, Confirm, Radio, Grid, TableHeader } from 'semantic-ui-react'
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

const TableExamplePagination = () => (
  <Table >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)


class MyTable extends React.Component {
  render() {
    return (
      <Table style={{'direction':'rtl', 'text-align':'right', 'width':'70%', 'float':'right'}} celled collapsing >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>صفت</Table.HeaderCell>
            <Table.HeaderCell>مقدار</Table.HeaderCell>      
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              سلام
            </Table.Cell>
            <Table.Cell>
              هارداسان؟
            </Table.Cell>          
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              سلام
            </Table.Cell>
            <Table.Cell>
              هارداسان؟
            </Table.Cell>          
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

class MyGrid extends React.Component {
  render() {
    return (
      <Grid columns={2} style={{ 'padding': '20px' }}>
        <Grid.Row style={{ 'height': '50vh' }}>
          <Grid.Column>
            {/* <div>اخبار</div> */}
            <Slides />
          </Grid.Column>
          <Grid.Column>
            <Segment>اطلاعات</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <div>hello</div>
          </Grid.Column>
          <Grid.Column>
            <div>hello</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      // <Grid columns={2} divided>
      //   <Grid.Row >
      //     <Grid.Column /*style={{ 'width': '50vw', 'text-align': 'right' }}*/>
      //       <Slides />
      //     </Grid.Column>
      //     <Grid.Column /*style={{ 'width': '50vw', 'text-align': 'right' }}*/>
      //       <Grid.Row style={{ 'height': '50vh' }}>
      //         <div>اطلاعات</div>
      //       </Grid.Row>
      //       <Grid.Row style={{ 'height': '50vh' }}>
      //         <div>آمار</div>
      //       </Grid.Row>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    )
  }
}


class MyPagination extends React.Component {
  render() {
    return (
      <Pagination
        defaultActivePage={5}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={10}
      />
    )
  }
}


class MyTabular extends React.Component {
  state = { activeItem: 'فوتبال' }

  handleItemClick = (e, { name }) => {
    console.log(name)
    this.setState({ activeItem: name })

  }
  render() {
    const { activeItem } = this.state
    if (activeItem === 'فوتبال') {
      return (
        <div style={{ width: '300px' }}>
          <Menu tabular >
            <Menu.Item style={{ color: 'red' }} name='فوتبال' active={activeItem === 'فوتبال'} onClick={this.handleItemClick}>ali asghar</Menu.Item>
            <Menu.Item name='بسکتبال' active={activeItem === 'بسکتبال'} onClick={this.handleItemClick} />
          </Menu>
          <Segment attached='bottom'>
            سلام بچه ها خوبین؟
      </Segment>
        </div>
      )
    }
    else {
      return (
        <div style={{ width: '300px' }}>
          <Menu tabular >
            <Menu.Item style={{ color: 'red' }} name='فوتبال' active={activeItem === 'فوتبال'} onClick={this.handleItemClick}>ali asghar</Menu.Item>
            <Menu.Item name='بسکتبال' active={activeItem === 'بسکتبال'} onClick={this.handleItemClick} />
          </Menu>
          <Segment attached='bottom'>
            There are many variations of passages of Lorem Ipsum available, but the majority have.
        </Segment>
        </div>
      )
    }

  }
}

class MyStep extends React.Component {
  render() {
    return (
      <Step.Group>
        <Step>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

class MyLoader extends React.Component {
  render() {
    return <Loader active inline='centered' />;
  }
}
class LabelIcon extends React.Component {
  render() {
    return (
      <Label>
        <Icon name='mail' /> 23
      </Label>
    )
  }
}

class DividerH extends React.Component {
  render() {
    return <Divider horizontal>Or</Divider>
  }
}

class DividerV extends React.Component {
  render() {
    return <Divider vertical>Or</Divider>
  }
}

class EnableDisable extends React.Component {
  render() {
    return <Radio toggle />;
  }
}

class ConfirmModule extends React.Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })
  render() {
    return (
      <div>
        <Button onClick={this.show} style={"color:red"}>Show</Button>
        <Confirm
          open={this.state.open}
          content='This is a custom message'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}



class Slides extends React.Component {
  render() {
    const style = {
      'height': '100%',
      'width': '80%',
      'box-sizing': 'border-box',
      'margin': 'auto'
    }
    const test_style = {

      'position': 'relative',
      'width': '100%',
      'height': '405px',

    }
    const inner_style = {
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'bottom': '0',
      'right': '0',
      'backgroundImage': `url(${slideImages[0]})`,
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': '50%'
    }
    return (
      <Slide className="taha" {...properties} style={style}>
        <div className="each-slide" style={test_style}>
          <div style={inner_style}></div>
        </div>
        <div className="each-slide" style={test_style}>
          <div style={inner_style}></div>
        </div>
        <div className="each-slide" style={test_style}>
          <div style={inner_style}></div>
        </div>
      </Slide>
    )
  }
}

class SearchInput extends React.Component {
  render() {
    return <Input placeholder='Search...' />;
  }
}

class SignUp extends React.Component {
  render() {
    return (<Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>);
  }
}

class App extends Component {


  render() {
    return (
      <div>
        {/* <MyTabular/> */}
        <MyGrid />
        <MyTable/>
        <TableExamplePagination/>
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