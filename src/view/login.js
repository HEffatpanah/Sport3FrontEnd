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
          <div className='login-form'>
              {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
              <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
              <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
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
          </div>;
      return <Template {...this.props} template={{column_2: loginForm,}} />
  }

}
export default LoginForm
