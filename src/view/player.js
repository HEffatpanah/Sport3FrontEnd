import React, { Component } from 'react'
import {Grid, Segment, Table, Dropdown, Button} from 'semantic-ui-react'
import Template from '../components/template'
import PlayerInfoTable from "../components/player/playerInfo";
import PlayerRecordTable from "../components/player/playerRecord";
import Newssummery from '../components/news/newsSummery'
import Adv from "../components/advertisement";

const playerInfo = {
    tableName: 'اطلاعات بازیکن',
    tableData:
        [
            {featureName: 'image', featureValue: 'images/horse.jpg'},
            {featureName: 'نام', featureValue: 'طغرل'},
            {featureName: 'سن', featureValue: 23,},
            {featureName: 'قد', featureValue: '180',},
            {featureName: 'وزن', featureValue: '80',},
            {featureName: 'تیم فعلی', featureValue: 'تراکتورسازی',},
            {featureName: 'ملیت', featureValue: 'ایران',},
            {featureName: 'پست', featureValue: 'مهاجم',},
        ],
};
const playerRecords = {
    tableName: 'آمار بازیکن',
    tableData: [
        {featureName: 'تعداد گل ها', featureValue: 200},
        {featureName: 'تعداد پاس گل ها', featureValue: 75},
        {featureName: 'تعداد کارت های زرد', featureValue: 20},
    ],
};


const newsData=[
    {title:'tractorhasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'perspoliasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjs', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
];




class App extends Component {
    state = {
        playerInfo:playerInfo,
        playerRecords:playerRecords,
        newsData:newsData,
    };

    render() {
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={4}>
                    <Grid.Column width={2}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Segment><Newssummery newsData={newsData}/></Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <PlayerRecordTable playerInfo={playerRecords}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <PlayerInfoTable playerInfo={playerInfo}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <Template {...this.props} body={body}/>

        )
    }
}
export default App