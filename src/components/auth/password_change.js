import React, {Component} from 'react'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import Template from '../template'
import {findDOMNode} from 'react-dom';
import axios from "axios";


class ChangePass extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        // this.name = this.name.bind(this)
        this.passConfirmCheck = this.passConfirmCheck.bind(this)
        this.passSave = this.passSave.bind(this)
        this.error = this.error.bind(this)
        this.state = {
            equal: true,
            pass: null,
            errors: null
        };
    }


    // name(e) {
    //     let user = findDOMNode(e.refs.uname).value.trim()
    //     let pass = findDOMNode(e.refs.pass).value.trim()
    //     console.log(user, pass)
    // }

    handleSubmit(event) {
        event.preventDefault();
        let url = window.location.href;
        let self = this;
        const user_id = this.props.match.params.user_id;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        let bodyFormData = new FormData();
        bodyFormData.set('user_id', user_id);
        bodyFormData.set('password', event.target.password.value);
        bodyFormData.set('confirm_pass', event.target.confirm_pass.value);


        axios({
            method: 'post',
            url: url,
            data: bodyFormData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            console.log(response['data']['message']);
            if (response['data']['message'].localeCompare("pass changed") === 0) {
                window.location.replace("http://localhost:3000/sport3/login");
            } else if (response['data']['message'].localeCompare("pass and confirm are not equal") === 0) {
                self.setState({
                    errors: <div>رمز وارد شده و تکرار رمز یکسان نمیباشند!</div>
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
                    <Form.Input name="password" fluid label='رمز عبور' required onChange={this.passSave}
                                type="password"/>
                    <Form.Input name="confirm_pass" fluid label='تایید رمز عبور' required
                                onChange={this.passConfirmCheck} error={!this.state.equal} type="password"/>
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
                        <ChangePass {...this.props}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <Template {...this.props} body={body}/>
        );
    }
}

export default App;
