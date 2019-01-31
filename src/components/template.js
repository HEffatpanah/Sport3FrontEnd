import React, {Component} from "react";
import {getActiveLanguage} from 'react-localize-redux';


import {Menu, Grid, Dropdown, Icon} from 'semantic-ui-react'

import {
    Container,
    Segment,
} from 'semantic-ui-react'
import {Translate, withLocalize} from "react-localize-redux";
import axios from "axios";

class Navbar extends Component {
    state = {
        activeItem: this.props.location.pathname,
        setName: false,
        name: 'Login',
        change: false,
        first: true
    };

    changeLanguage(code) {
        switch (code) {
            case 'fa':
                localStorage.setItem('lan', 'fa');
                localStorage.setItem('dir', 'rtl');
                localStorage.setItem('align', 'right');
                localStorage.setItem('I_align', 'left');
                window.location.reload();
                break;
            case 'en':
                localStorage.setItem('lan', 'en');
                localStorage.setItem('dir', 'ltr');
                localStorage.setItem('align', 'left');
                localStorage.setItem('I_align', 'right');
                window.location.reload();
                break;
        }
    }

    handleItemClick = (e, {name, path}) => {
        this.setState({activeItem: name});
        if (this.props.location.pathname !== path)
            this.props.history.push(path);
    };
    handleDropdownitemClick = (e, {value}) => {
        if (value === 'football') {
            this.props.history.push("/footballMatches");
        } else if (value === 'basketball') {
            this.props.history.push("/basketballMatches");
        }
    };

    render() {
        if (localStorage.getItem('username') !== null && !this.state.setName) {
            this.setState({setName: true, name: localStorage.getItem('username')})
        }
        const Logout = () => {
            // let url = window.location.href;
            let userAuth = false;
            // url = url.replace('3', '8');
            axios.defaults.withCredentials = true;
            let self = this;
            let bodyFormData = new FormData();
            bodyFormData.set('username', localStorage.getItem('username'));
            axios({
                method: 'post',
                url: 'http://localhost:8000/sport3/logout',
                data: bodyFormData,
                config: {headers: {'Content-Type': 'multipart/form-data'}}
            }).then(function (response) {
                localStorage.removeItem('username');
                self.setState({change: !self.state.change});
            });

        };
        const Login_Logout = () => {
            console.log(localStorage.getItem('I_align'));
            if (localStorage.getItem('username') !== null) {

                return (
                    <Menu.Item position={localStorage.getItem('I_align')} style={{height: 'inherit'}}>
                        <Dropdown text={this.state.name} item pointing={'right top'}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={Logout}>{<Translate id="logout"/>}<Icon
                                    style={{textAlign: 'center'}} name='log out'/></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>

                )
            } else {
                return (
                    <Menu.Item
                        name='login'
                        active={this.props.location.pathname === '/login'}
                        onClick={this.handleItemClick}
                        path='/sport3/login'
                        position={localStorage.getItem('I_align')}
                    ><Icon name='user'/></Menu.Item>

                )
            }
        };
        return (

            <Menu inverted style={{height: '100%', maxHeight: '2em'}}>
                <Menu.Item
                    name='home'
                    path='/sport3/home'
                    active={this.props.location.pathname === '/sport3/home'}
                    onClick={this.handleItemClick}
                >{<Translate id="home"/>}</Menu.Item>
                <Menu.Item
                    name='leagues'
                    path='/sport3/league/default/default/0'
                    active={this.props.location.pathname === '/sport3/league/default/default/0'}
                    onClick={this.handleItemClick}
                >{<Translate id="league"/>}</Menu.Item>
                <Dropdown text={<Translate id="language"/>} simple item>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.changeLanguage.bind(this, 'fa')} style={{textAlign: 'center'}}
                                       value='football'>فارسی</Dropdown.Item>
                        <Dropdown.Item onClick={this.changeLanguage.bind(this, 'en')} style={{textAlign: 'center'}}
                                       value='Basketball'>English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {Login_Logout()}
            </Menu>


        )
    }
}


class Footer extends Component {
    render() {
        return (

            <Segment inverted vertical style={{padding: '5em 0em'}}>

                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column style={{textAlign: 'center'}}>
                            <Icon name={'telegram'} size='big'/>
                            <Icon name={'google plus circle'} size='big'/>
                            <Icon name={'react'} size='big'/>
                            {/*<Icon link={'rocket'}/>*/}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{textAlign: 'center'}}>
                            <div style={{textAlign: 'center'}}>
                                ProducedBy : HosseinEffatPanah & AliAsgharKhani
                                <br/>
                                <a href={'//www.sharif.ir'}>SUT</a>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>

        )
    }
}


class Template extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var all = document.querySelectorAll('*:not(i)');
        for (var i = 0, max = all.length; i < max; i++) {
            const font = localStorage.getItem('lan') === 'en' ? 'font-family :Helvetica !important' : 'font-family :B Yekan !important';
            if (all[i].getAttribute('style'))
                all[i].setAttribute('style', all[i].getAttribute('style') + font);
            else all[i].setAttribute('style', font);
        }
    }

    render() {
        // this.ali();
        const zerostyle = {
            color: '#bec8dc',
            'text-align': 'center',
            margin: 0,
            padding: 0,
            border: 0,
        };
        const firststyle = {
            margin: 0,
            padding: 0,
            border: 0,
        };
        const secondstyle = {
            paddingLeft: '2.5vw',
            paddingRight: '2.5vw',
            backgroundImage: 'url(' + require('../images/1.png') + ')',
            // 'background-size':'cover',
            minHeight: '100%',
        };
        const thirdstyle = {
            height: '15vh',
        };
        const style = {
            direction: localStorage.getItem('dir'),
            textAlign: localStorage.getItem('align')
        };
        return (
            <div id='mamad' style={style}>
                <div style={{'height': '100vh'}}>
                    <Grid style={{'height': '100%'}}>
                        <Grid.Row style={zerostyle}>
                            <Grid.Column style={{textAlign: 'center'}}>
                                <img style={{float: 'right'}} src={require("../images/2.png")}/>
                                <img style={{float: 'center', marginTop: '5vh', height: '10vh'}}
                                     src={require("../images/6.png")}/>
                                <img style={{float: 'left', margin: '2vh'}} src={require("../images/10.png")}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={firststyle}>
                            <Grid.Column>
                                <Navbar {...this.props}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={secondstyle}>
                            {this.props.body}
                        </Grid.Row>
                        <Grid.Row style={thirdstyle}>
                            <Grid.Column>
                                <Footer/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withLocalize(Template);