import React,{Component} from "react";


import { Menu,Grid, Dropdown, Icon} from 'semantic-ui-react'

import {
    Container,
    Segment,
} from 'semantic-ui-react'


class Navbar extends Component {
    state = {
        activeItem: this.props.location.pathname,
        setName:false,
        name:'Login',
        change:false,
        first: true
    };
    handleItemClick = (e, {name,path}) => {
        this.setState({activeItem: name});
        if(this.props.location.pathname!==path)
            this.props.history.push(path);
    };
    handleDropdownitemClick = (e, {value}) => {
        if (value === 'football'){
            this.props.history.push("/footballMatches");
        }
        else if (value === 'basketball'){
            this.props.history.push("/basketballMatches");
        }
    };
    render() {
        if(localStorage.getItem('username')!==null && !this.state.setName){
            this.setState({setName:true,name:localStorage.getItem('username')})
        }
        const Logout = () => {
            localStorage.clear();
            this.setState({change:!this.state.change});
        };
        const Login_Logout =() => {
            if(localStorage.getItem('username') !== null) {
                return (
                    <Menu.Item position='left' style={{height:'inherit'}}>
                    <Dropdown text={this.state.name} item pointing={'right top'}>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={Logout}>خروج<Icon style={{textAlign:'center'}} name='log out'/></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Menu.Item>

                )
            }
            else{
                return(
                    <Menu.Item
                        name='login'
                        active={this.props.location.pathname === '/login'}
                        onClick={this.handleItemClick}
                        path = '/login'
                        position={'left'}
                    ><Icon name='user'/></Menu.Item>

                )
            }
        };
        return (

            <Menu inverted style={{height:'100%', maxHeight: '2em'}}>
                {Login_Logout()}
                <Dropdown text='ورزش ها' simple item>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.handleDropdownitemClick} style={{ textAlign:'center'}} value='football'>فوتبال</Dropdown.Item>
                        <Dropdown.Item onClick={this.handleDropdownitemClick} style={{ textAlign:'center'}}  value='Basketball'>بسکتبال</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    name='news'
                    path = '/news'
                    active={this.props.location.pathname === '/news'}
                    onClick={this.handleItemClick}
                >اخبار</Menu.Item>
                <Menu.Item
                    name='player'
                    path = '/player'
                    active={this.props.location.pathname === '/player'}
                    onClick={this.handleItemClick}
                >بازیکن</Menu.Item>
                <Menu.Item
                    name='teams'
                    path = '/teams'
                    active={this.props.location.pathname === '/teams'}
                    onClick={this.handleItemClick}
                    >تیم ها</Menu.Item>
                <Menu.Item
                    name='home'
                    path = '/'
                    active={this.props.location.pathname === '/'}
                    onClick={this.handleItemClick}
                >خانه</Menu.Item>
            </Menu>



        )
    }
}


class Footer extends Component{
    render(){
        return(

            <Segment inverted vertical style={{ padding: '5em 0em'}}>

                <Grid >
                    <Grid.Row columns={1}>
                        <Grid.Column style={{textAlign: 'center'}}>
                            <Icon name={'telegram'} size='big'/>
                            <Icon name={'google plus circle'}size='big' />
                            <Icon name={'react'} size='big'/>
                            {/*<Icon link={'rocket'}/>*/}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{textAlign: 'center'}}>
                            <div style={{textAlign: 'center'}}>
                                ProducedBy : HosseinEffatPanah & AliAsgharKhani
                                <br/>
                                <a href={'https://sharif.ir'}>SUT</a>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>

        )
    }
}



export default class Template extends Component {

    render() {
        const zerostyle = {
            color:'#bec8dc',
            'text-align': 'center',
            margin:0,
            padding:0,
            border:0,
        };
        const firststyle = {
            margin:0,
            padding:0,
            border:0,
        };
        const secondstyle = {
            paddingLeft: '2.5vw',
            paddingRight: '2.5vw',
            backgroundImage: 'url(' + require('../images/1.png') + ')',
            // 'background-size':'cover',
            minHeight:'100%',
        };
        const thirdstyle = {
            height:'15vh',
        };
        return (
            <div style={{'height': '100vh' }}>
                <Grid  style={{ 'height': '100%'}}>
                    <Grid.Row style={zerostyle}>
                        <Grid.Column style={{textAlign: 'center'}}>
                            <img style={{float:'right'}} src={require("../images/2.png")}/>
                            <img style={{float:'center',marginTop:'5vh'}} src={require("../images/6.png")}/>
                            <img style={{float:'left',marginTop:'2vh'}} src={require("../images/10.png")}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={firststyle}>
                        <Grid.Column >
                            <Navbar {...this.props}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={secondstyle}>
                        {this.props.body}
                    </Grid.Row>
                    <Grid.Row style={thirdstyle}>
                        <Grid.Column >
                            <Footer/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}