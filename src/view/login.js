import React ,{Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import Template from "../components/template";

class LoginForm extends Component {
  constructor(prop){
    super(prop);
    this.state={
      path:'/login'
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(4);
    if(event.target.user.value==='admin'&& event.target.pass.value==='admin')
    {
      console.log(this.state.path);
      this.setState({
        path:'/'
      });
        localStorage.setItem('username',event.target.user.value);
        this.props.history.goBack();
    }
    else {
      alert('wrong user')
    }
  }

  render() {
      const loginForm =
              <Grid textAlign='center' style={{width:'100%', height: '100%'}} verticalAlign='middle'>
                  <Grid.Column style={{maxWidth: 450}}>
                      <Header as='h2' color='teal' textAlign='center'>
                          {/* <Image src='/logo.png' /> Log-in to your account */}
                      </Header>
                      <Form size='large' onSubmit={this.handleSubmit}>
                          <Segment stacked>
                              <Form.Input name='user' fluid icon='user' iconPosition='left' placeholder='Username'
                                          required/>
                              <Form.Input name='pass' required
                                          fluid
                                          icon='lock'
                                          iconPosition='left'
                                          placeholder='Password'
                                          type='password'
                              />

                              <Button type='submit' color='teal' fluid size='large'>
                                  Login
                              </Button>
                          </Segment>
                      </Form>
                      <Message>
                          New to us? <a href='https://www.google.com'>Sign Up</a>
                      </Message>
                  </Grid.Column>
              </Grid>
      return <Template {...this.props} template={{body: loginForm,}} />
  }

}
export default LoginForm
