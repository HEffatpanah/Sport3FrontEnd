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


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport: "football",
            footballMatchesData: '',
            footballNewsData: '',
            basketballMatchesData: '',
            basketballNewsData: '',
            get: false,
        };
        this.props.addTranslation(globalTranslations);
        this.get_data()
    }

    get_data() {
        let url = window.location.href
        url = url.replace('3', '8')
        axios.defaults.withCredentials = true;
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                footballMatchesData: response.data['football']['matchesTable'],
                footballNewsData: response.data['football']['newsTable'],
                basketballMatchesData: response.data['basketball']['matchesTable'],
                basketballNewsData: response.data['basketball']['newsTable'],
                get: true,
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
                                        <NewsSummeryWithTab newsData={this.state.footballNewsData}/>
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
                                        <NewsSummeryWithTab newsData={this.state.basketballNewsData}/>
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