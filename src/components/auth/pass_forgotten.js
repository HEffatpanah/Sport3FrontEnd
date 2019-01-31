import React, {Component} from 'react';
import {Button, Form, Grid, Header, Icon, Message, Segment} from 'semantic-ui-react';
import Template from "../template";
import _ from 'lodash'
import {Translate} from "react-localize-redux";
import axios from "axios";

class PassForgotten extends Component {
    constructor(prop) {
        super(prop);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        path: '/login',
        loginData: null,
        hiddenLoginError: true,
    };

    handleSubmit(event) {
        let url = window.location.href;
        let userAuth = false
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        let user = event.target.user.value;
        let self = this;
        axios.post(url, {
            username: event.target.user.value,
            email: event.target.email.value
        }).then(function (response) {
            if (response['data']['message'].localeCompare("successful") === 0) {
                localStorage.setItem('username', user);
                userAuth = true;
            }
        });
    }

    render() {
        const pass_forgotten =
            <Grid textAlign='center' style={{width: '100%', height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment>
                            <Form.Input name='user' fluid icon='user' label={<Translate id="username"/>} required/>
                            <Form.Input name="email" fluid label={<Translate id="email"/>} placeholder='Email@example.com' type="email" required/>
                            <Button type='submit' content={<Translate id="send password"/>} color='teal' fluid size='large'>
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        return <Template {...this.props} body={pass_forgotten}/>
    }

}

export default PassForgotten
