import React, {Component} from 'react';
import {Button, Form, Grid, Header, Icon, Loader, Message, Segment} from 'semantic-ui-react';
import Template from "../template";
import _ from 'lodash'
import {Translate} from "react-localize-redux";
import axios from "axios";

class Confirm extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            message: true,
            get: false,
        };
        this.get_data()
    }


    get_data(event) {
        let url = window.location.href;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        console.log(url);
        let self = this;
        axios.get(url).then(function (response) {
            self.setState({get: true})
            console.log(response['data']['message'])
            if (response['data']['message'].localeCompare("account has been confirmed") === 0) {
                self.setState({message:'حساب کاربری شما تایید شد'})
            }
            else {
                self.setState({message:'حساب کاربری شما تایید نشد'})
            }
        });
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        const confirm =
            <Grid textAlign='center' style={{width: '100%', height: '100%'}} >
                <Grid.Column style={{maxWidth: 450}}>
                    <Message style={{textAlign: 'center'}}>
                        {this.state.message}
                    </Message>
                </Grid.Column>
            </Grid>;
        return <Template {...this.props} body={confirm}/>
    }

}

export default Confirm
