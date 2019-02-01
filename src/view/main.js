import React, {Component} from 'react';
import {Segment, Grid, Loader} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import globalTranslations from "../translations/global";
import {Translate, withLocalize} from "react-localize-redux";
import NewsSummeryWithTab from '../components/news/newsSummaryWithTab'
import axios from "axios";
import Cookies from "universal-cookie";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport: "football",
            footballMatchesData: '',
            footballNewsData: [],
            basketballMatchesData: '',
            basketballNewsData: [],
            get: false,
            update:false,
            logged_in:'no',
        };
        this.props.addTranslation(globalTranslations);
        this.get_data();
        this.refresh_news_number = this.refresh_news_number.bind(this)
    }

    refresh_news_number(event) {
        this.setState({get:false});
        let url = window.location.href;
        let userAuth = false;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        let self = this;
        let bodyFormData = new FormData();
        bodyFormData.set('number_of_news', event.target.news_number.value);
        axios({
            method: 'post',
            url: url,
            data: bodyFormData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            self.setState({
                footballNewsData: response.data['football']['newsTable'],
                basketballNewsData: response.data['basketball']['newsTable'],
                get: true,
                logged_in:response.data['logged_in'],
            })
        })
    }

    get_data() {
        let url = window.location.href;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        if (localStorage.getItem('Authorization') != null) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
        }
        axios.get(url).then(response => {
            this.setState({
                footballMatchesData: response.data['football']['matchesTable'],
                footballNewsData: response.data['football']['newsTable'],
                basketballMatchesData: response.data['basketball']['matchesTable'],
                basketballNewsData: response.data['basketball']['newsTable'],
                get: true,
                logged_in:response.data['logged_in']
            })

        })
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        let body =
            <Grid style={{width: '100%'}}>

                <Grid.Row columns={4} style={{height: '87%'}}>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment style={{textAlign: 'center', backgroundColor: '#179c36', color: 'white'}}>
                                        {<Translate id="football"/>}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column width={9}>
                                    <Grid.Row>

                                        <MatchesSummaryTable matchesData={this.state.footballMatchesData}
                                                             session={'all'}/>
                                    </Grid.Row>
                                    <Grid.Row style={{marginTop: '1vh'}}>
                                        <Adv advertisement={'https://static.farakav.com/v3/static/bpx/00910571.gif'}/>
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Segment>
                                        <NewsSummeryWithTab logged_in={this.state.logged_in} refresh_news_number={this.refresh_news_number}
                                                            newsData={this.state.footballNewsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Adv
                            link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'}
                            advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment style={{textAlign: 'center', backgroundColor: '#ebc004', color: 'white'}}>
                                        {<Translate id="basketball"/>}
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column width={9}>
                                    <Grid.Row>
                                        <MatchesSummaryTable matchesData={this.state.basketballMatchesData}
                                                             session={'all'}/>
                                    </Grid.Row>
                                    <Grid.Row style={{marginTop: '1vh'}}>
                                        <Adv advertisement={'https://static.farakav.com/v3/static/bpx/00910379.gif'}/>
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Segment>
                                        <NewsSummeryWithTab logged_in={this.state.logged_in} refresh_news_number={this.refresh_news_number} newsData={this.state.basketballNewsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <div>
                <Template {...this.props} body={body}/>
            </div>
        );
    }
}

export default withLocalize(App);