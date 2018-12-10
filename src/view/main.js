import React, { Component } from 'react';
import { Tab, Segment, Grid} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import Newssummery from '../components/news/newsSummery'


const matchData = [
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
    { team1Name:'mancity', team2Name:'arsenal',team1Goal:'2',team2Goal:'1', date:'امروز'},
];


const newsData=[
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
    {title:'تراکتور سازی تبریز ، تیم چرت پدیده را ۱۰ بر هیچ شکست داد', link:'https://www.google.com'},
]


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport : "football"
        };
    }
    handleSelectorChange = (selectedOption) => {
        this.setState({selectedSport:selectedOption.value});
    };
    render() {

        const options = [
            { value: 'football', label: 'فوتبال' },
            { value: 'basketball', label: 'بسکتبال' },
        ];
        // const news =
        //     <Segment>
        //
        //         <a id="ew" href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //         <a href="https://www.google.com">news</a><br/>
        //     </Segment>;

        const Selectbar =
            <Select placeholder='انتخاب ورزش'  search selection options={options} onChange={this.handleSelectorChange}/>;
        let body =
            <Grid style={{width:'100%'}}>

                <Grid.Row columns={4} style={{height:'87%'}}>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment style={{textAlign:'center'}}>
                                        فوتبال
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column  style={{padding:0}} width={9}>
                                    <MatchesSummaryTable matchesData={matchData}/>
                                </Grid.Column>
                                <Grid.Column  style={{padding:0}} width={7}>
                                    <Segment>
                                        <Newssummery newsData={newsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column  style={{padding:0}} width={2}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment style={{textAlign:'center'}}>
                                        بسکتبال
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column  style={{padding:0}} width={9}>
                                    <MatchesSummaryTable matchesData={matchData}/>
                                </Grid.Column>
                                <Grid.Column  style={{padding:0}} width={7}>
                                    <Segment>
                                        <Newssummery newsData={newsData}/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <div>
                <Template {...this.props} body={body}  />
            </div>
        );
    }
}
export default App;