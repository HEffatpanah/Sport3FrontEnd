import React, { Component } from 'react'
import {Grid, Segment, Table, Dropdown, Button} from 'semantic-ui-react'
import Template from '../components/template'
import PlayerInfoTable from "../components/player/playerInfo";
import PlayerRecordTable from "../components/player/playerRecord";
import Adv from "../components/advertisement";
import PlayerNews from '../components/player/playerNews'
const playerInfo = {
    tableName: 'اطلاعات بازیکن',
    tableData:
        [
            {fieldOfSport:'football'},
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
    tableData1: [
        {featureName: 'تعداد گل ها', featureValue: 200},
        {featureName: 'تعداد پاس گل ها', featureValue: 75},
        {featureName: 'تعداد کارت های زرد', featureValue: 20},
    ],
    tableData2: [
        {featureName: 'تعداد گل ها', featureValue: 150},
        {featureName: 'تعداد پاس گل ها', featureValue: 95},
        {featureName: 'تعداد کارت های زرد', featureValue: 20},
    ]
};


const newsData=[
    {title:'برهانی به تیم ملی پیوست', link:'https://www.google.com',image:'../../images/2.png',  headLine:'فلانی به علت بوووق رفت ولی برگشت اما در مسیر برگشت پایش شکست.حاج حسین انسان خوبی است ولی گم شده است علی اصغر میخواهد که پروژه کار کند ولی علی اصغر همیشه باید حرص بخورد چون حسین وقت نمیگذارد'},
    {title:'کیانی مرد', link:'https://www.google.com',image:'../../images/2.png',  headLine:'فلانی به علت بوووق رفت ولی برگشت اما در مسیر برگشت پایش شکست.حاج حسین انسان خوبی است ولی گم شده است علی اصغر میخواهد که پروژه کار کند ولی علی اصغر همیشه باید حرص بخورد چون حسین وقت نمیگذارد'},
    {title:'غفاری اردواج کرد', link:'https://www.google.com',image:'../../images/2.png',  headLine:'فلانی به علت بوووق رفت ولی برگشت اما در مسیر برگشت پایش شکست.حاج حسین انسان خوبی است ولی گم شده است علی اصغر میخواهد که پروژه کار کند ولی علی اصغر همیشه باید حرص بخورد چون حسین وقت نمیگذارد'},

];




class App extends Component {

    render() {
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={4}>

                    <Grid.Column width={4}>
                        <PlayerInfoTable playerInfo={playerInfo}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <PlayerRecordTable playerRecords={playerRecords}/>
                    </Grid.Column>

                    <Grid.Column width={6}>
                        <Segment><PlayerNews newsData={newsData}/></Segment>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Adv link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'} advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;


            return (
                <Template {...this.props} body={body}/>

            );
    }
}
export default App