import React ,{Component} from 'react';
import {Button, Form, Grid, Header, Icon, Message, Segment} from 'semantic-ui-react';
import Template from "../components/template";
import _ from 'lodash'
import {Translate} from "react-localize-redux";

const members=[
    {user:'ali', pass:'123'},
    {user:'hossein', pass:'456'},
]

class LoginForm extends Component {
    constructor(prop){
        super(prop);

        this.handleSubmit=this.handleSubmit.bind(this);
    }
    state={
            path:'/login',
            loginData:members,
            hiddenLoginError:true,
        }
    handleSubmit(event) {
        let userAuth = false;
        _.map(this.state.loginData, ({user, pass}) => {
            if(event.target.user.value === user && pass === event.target.pass.value)
            {
                localStorage.setItem('username',event.target.user.value);
                this.props.history.goBack();
                userAuth = true;
            }
        });
        if(!userAuth){
            this.setState({hiddenLoginError:false})
        }


    }

    render() {
        const loginForm =
            <Grid textAlign='center' style={{width:'100%', height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Message hidden={this.state.hiddenLoginError} error={true} >
                        {<Translate id="wrong user" />}
                    </Message>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment >
                            <Form.Input name='user' fluid icon='user' label={<Translate id="username" />}  required/>
                            <Form.Input name='pass' required
                                        fluid
                                        icon='lock'
                                        label={<Translate id="password" />}
                                        type='password'
                            />

                            <Button type='submit' content={<Translate id="sign in" />} color='teal' fluid size='large'>
                            </Button>
                        </Segment>
                    </Form>
                    <Message   style={{textAlign:'center'}}>
                        {<Translate id="dont register?" />}<a href='../signup'>{<Translate id="register" />}</a>
                    </Message>
                </Grid.Column>
            </Grid>
        return <Template {...this.props} body={loginForm}/>
    }

}
export default LoginForm
