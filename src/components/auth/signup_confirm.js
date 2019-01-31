import React, {Component} from 'react';
import {Button, Form, Grid, Header, Icon, Loader, Message, Segment} from 'semantic-ui-react';
import Template from "../template";
import _ from 'lodash'
import {Translate} from "react-localize-redux";
import axios from "axios";

class SignupConfirm extends Component {

    render() {
        const signup_confirm =
            <Grid textAlign='center' style={{width: '100%', height: '100%'}} >
                <Grid.Column style={{maxWidth: 450}}>
                    <Message style={{textAlign: 'center'}}>
                        لطفا از طریق لینک ارسال شده به ایمیلتان، حسابتان را فعال کنید.
                    </Message>
                </Grid.Column>
            </Grid>;
        return <Template {...this.props} body={signup_confirm}/>
    }

}

export default SignupConfirm
