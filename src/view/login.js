import React, {Component} from 'react';
import {Button, Form, Grid, Header, Icon, Message, Segment} from 'semantic-ui-react';
import Template from "../components/template";
import _ from 'lodash'
import {Translate} from "react-localize-redux";
import axios from "axios";
import Cookies from 'universal-cookie';

const members = [
    {user: 'ali', pass: '123'},
    {user: 'hossein', pass: '456'},
]

class LoginForm extends Component {
    constructor(prop) {
        super(prop);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        path: '/login',
        loginData: members,
        hiddenLoginError: true,
        error: '',
    };

    handleSubmit(event) {

        let url = window.location.href;
        let userAuth = false
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        console.log(event.target.user.value, event.target.pass.value);
        let user = event.target.user.value;
        let self = this;

        let bodyFormData = new FormData();
        bodyFormData.set('username', event.target.user.value);
        bodyFormData.set('password', event.target.pass.value);
        let flag = 0;

        axios({
            method: 'post',
            url: url,
            data: bodyFormData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            if (response['data']['message'].localeCompare("successful") === 0) {
                localStorage.setItem('username', user);
                // localStorage.setItem('Authorization', 'Token ' + response.data["token"]);
                const cookies = new Cookies();
                cookies.set('Token', response.data['token']);
                window.location.replace("http://localhost:3000/sport3/home");
            } else if (response['data']['message'].localeCompare("not confirmed") === 0) {
                self.setState({hiddenLoginError: false, error: 'حساب فعال نشده است'})

            } else {
                self.setState({hiddenLoginError: false, error: 'رمز عبور یا نام کاربری استباه است!'})

            }
        })


        //
        // axios.post(url, ({
        //     username: event.target.user.value,
        //     password: event.target.pass.value
        // })).then(function (response) {
        //     console.log(response['data']['message'])
        //     if (response['data']['message'].localeCompare("successful") === 0) {
        //         localStorage.setItem('username', user);
        //         window.location.replace("http://localhost:3000/sport3/home");
        //     } else if (response['data']['message'].localeCompare("not confirmed") === 0) {
        //         self.setState({hiddenLoginError: false, error: 'حساب فعال نشده است'})
        //     } else {
        //         self.setState({hiddenLoginError: false, error: 'رمز عبور یا نام کاربری استباه است!'})
        //     }
        // });


        // let userAuth = false;
        // this.state.loginData.map(({user, pass}) => {
        //     if(event.target.user.value === user && pass === event.target.pass.value)
        //     {
        //         localStorage.setItem('username',user);
        //         this.props.history.goBack();
        //         userAuth = true;
        //     }
        // });
        // if(!userAuth){
        //     this.setState({hiddenLoginError:false})
        // }


    }

    render() {
        const loginForm =
            <Grid textAlign='center' style={{width: '100%', height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Message hidden={this.state.hiddenLoginError} error={true}>
                        {this.state.error}
                    </Message>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment>
                            <Form.Input name='user' fluid icon='user' label={<Translate id="username"/>} required/>
                            <Form.Input name='pass' required
                                        fluid
                                        icon='lock'
                                        label={<Translate id="password"/>}
                                        type='password'
                            />

                            <Button type='submit' content={<Translate id="sign in"/>} color='teal' fluid size='large'>
                            </Button>
                        </Segment>
                    </Form>
                    <Message style={{textAlign: 'center'}}>
                        {<Translate id="dont register?"/>}<a href='http://localhost:3000/sport3/signup'>{<Translate
                        id="register"/>}</a><br/>
                        <a href='http://localhost:3000/sport3/pass_forgotten'>{<Translate id="pass_forgotten"/>}</a>
                    </Message>
                </Grid.Column>
            </Grid>
        return <Template {...this.props} body={loginForm}/>
    }

}

export default LoginForm
