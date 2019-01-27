import React, {Component} from 'react'
import {Grid, Loader, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import PlayerInfoTable from "../components/player/playerInfo";
import PlayerRecordTable from "../components/player/playerRecord";
import Adv from "../components/advertisement";
import PlayerNews from '../components/player/playerNews'
import NewsSummery from '../components/news/newsSummery'
import axios from "axios";


const playerInfo = {
    tableName: 'اطلاعات بازیکن',
    fieldOfSport: 'football',
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
    seasons: [],
    tableData: [
        {
            data: [
                {featureName: 'تعداد گل ها', featureValue: 200},
                {featureName: 'تعداد پاس گل ها', featureValue: 75},
                {featureName: 'تعداد کارت های زرد', featureValue: 20},
                {featureName: 'تعداد کارت های قرمز', featureValue: 8},
                {featureName: 'تعداد هتریک', featureValue: 6},
                {featureName: 'تعداد جام ها', featureValue: 7},
            ],
            season: '۹۶-۹۷'
        },
        {
            data: [
                {featureName: 'تعداد گل ها', featureValue: 200},
                {featureName: 'تعداد پاس گل ها', featureValue: 75},
                {featureName: 'تعداد کارت های زرد', featureValue: 20},
                {featureName: 'تعداد کارت های قرمز', featureValue: 8},
                {featureName: 'تعداد هتریک', featureValue: 6},
                {featureName: 'تعداد جام ها', featureValue: 7},
            ],
            season: '۹۷-۹۸'
        },
    ],
};


const relatedNewsData = [
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
    {title: 'سلا سنت نتا بسیب ی نم تانتا نتانتا نمنمن اتنمتا', link: 'https://www.google.com'},
];


const newsData = [
    {
        title: 'برهانی به تیم ملی پیوست',
        link: 'https://www.google.com',
        image: '../../images/2.png',
        headLine: 'فلانی به علت بوووق رفت ولی برگشت اما در مسیر برگشت پایش شکست.حاج حسین انسان خوبی است ولی گم شده است علی اصغر میخواهد که پروژه کار کند ولی علی اصغر همیشه باید حرص بخورد چون حسین وقت نمیگذارد'
    },
    {
        title: 'کیانی مرد',
        link: 'https://www.google.com',
        image: '../../images/2.png',
        headLine: 'فلانی به علت بوووق رفت ولی برگشت اما در مسیر برگشت پایش شکست.حاج حسین انسان خوبی است ولی گم شده است علی اصغر میخواهد که پروژه کار کند ولی علی اصغر همیشه باید حرص بخورد چون حسین وقت نمیگذارد'
    },
    {
        title: 'غفاری اردواج کرد',
        link: 'https://www.google.com',
        image: '../../images/2.png',
        headLine: 'فلانی به علت بوووق رفت ولی برگشت اما در مسیر برگشت پایش شکست.حاج حسین انسان خوبی است ولی گم شده است علی اصغر میخواهد که پروژه کار کند ولی علی اصغر همیشه باید حرص بخورد چون حسین وقت نمیگذارد'
    },

];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: null,
            relatedNewsData: null,
            playerRecords: null,
            playerInfo: null,
            get: false,
        };
        this.get_data()
    }

    get_data() {
        let url = window.location.href
        url = url.replace('3', '8')
        axios.defaults.withCredentials = true;
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                newsData: response.data['newsData'],
                relatedNewsData: response.data['relatedNewsData'],
                playerRecords: response.data['playerRecords'],
                playerInfo: response.data['playerInfo'],
                get: true,
            })
        })
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={4}>
                    <Grid.Column width={1}/>
                    <Grid.Column width={3}>
                        <Segment><NewsSummery newsData={this.state.relatedNewsData}/></Segment>
                    </Grid.Column>


                    <Grid.Column width={5}>
                        <Grid.Row>
                            <Adv
                                link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'}
                                advertisement={'https://static-ads.farakav.com/MDY4YzVlMjAtMGY0Yy00MTBlLTg0NDktZGZkZThiYjBiNTlm/ca4ca12b6e7b4610a4d9ed0cd2cf10a9.gif'}/>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '1vh'}}>
                            <Segment><PlayerNews newsData={this.state.newsData}/></Segment>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '1vh'}}>
                            <PlayerRecordTable playerRecords={this.state.playerRecords}/>
                        </Grid.Row>

                    </Grid.Column>
                    <Grid.Column width={4}>
                        {/*<PlayerRecordTable playerRecords={playerRecords}/>*/}
                        <PlayerInfoTable playerInfo={this.state.playerInfo}/>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Adv
                            link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'}
                            advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={1}/>
                </Grid.Row>
            </Grid>;


        return (
            <Template {...this.props} body={body}/>

        );
    }
}

export default App