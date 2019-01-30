import React, {Component} from 'react'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import {findDOMNode} from 'react-dom';
import axios from "axios";


class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.name = this.name.bind(this)
        this.passConfirmCheck = this.passConfirmCheck.bind(this)
        this.passSave = this.passSave.bind(this)
        this.error= this.error.bind(this)

    }

    state = {
        equal: true,
        pass: null,
        errors: null
    };

    name(e) {
        let user = findDOMNode(e.refs.uname).value.trim()
        let pass = findDOMNode(e.refs.pass).value.trim()
        console.log(user, pass)
    }

    handleSubmit(event) {
        event.preventDefault();
        let url = window.location.href;
        let self = this
        url = url.replace('3', '8');
        console.log(event.target.rule.checked);
        axios.defaults.withCredentials = true;
        axios.post(url, {
            username: event.target.username.value,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirm_pass: event.target.confirm_pass.value,
            rules: event.target.rule.checked,
        }).then(function (response) {
            if (response['data']['message'].localeCompare("user created") === 0) {
                window.location.replace("http://localhost:3000/sport3/login");
            } else if (response['data']['message'].localeCompare("empty_fields") === 0) {
                self.setState({
                    errors: response['data']['fields'].map((field) => {
                            return (<div>{field + 'is empty'}</div>)
                        }
                    )
                })
            }
            else if(response['data']['message'].localeCompare("pass and confirm are not equal") === 0){
                self.setState({
                    errors:<div>رمز وارد شده و تکرار رمز یکسان نمیباشند!</div>
                })
            }
        });
    }

    error() {
        return this.state.errors;
    }

    passConfirmCheck(event) {
        if (this.state.pass === event.target.value) {
            this.setState({equal: true})
        } else
            this.setState({equal: false})
    }

    passSave(event) {
        this.setState({pass: event.target.value})
    }

    render() {
        return (
            <Segment>
                <div>{this.error()}</div>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Input name="first_name" fluid label='نام' required/>
                    <Form.Input name="last_name" fluid label='نام خانوادگی' required/>
                    <Form.Input name="username" fluid label='نام کاربری' required/>
                    <Form.Input name="password" fluid label='رمز عبور' required onChange={this.passSave}
                                type="password"/>
                    <Form.Input name="confirm_pass" fluid label='تایید رمز عبور' required
                                onChange={this.passConfirmCheck} error={!this.state.equal} type="password"/>
                    <Form.Input name="email" fluid label='ایمیل' placeholder='Email@example.com' type="email" required/>
                    {/*<Form.Checkbox name="rules" label='قوانین و شرایط را قبول دارم' required/>*/}
                    <label htmlFor="other">قوانین و شرایط را قبول دارم</label>
                    <Form.Input type="checkbox" name="rule" id="other" ref="rule" required/>

                    <Button color='teal' fluid type='submit'>تایید</Button>
                </Form>
            </Segment>
        )
    }


};


class App extends Component {
    render() {
        const body =
            <Grid verticalAlign='middle' textAlign='center' style={{width: '100%', height: '100%'}}>
                <Grid.Row>
                    <Grid.Column style={{maxWidth: '30vw'}}>
                        <SignupForm/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <Template {...this.props} body={body}/>
        );
    }
}

export default App;
