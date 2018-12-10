import React, { Component } from 'react';
import Template from '../components/template'
import {Grid, Segment} from 'semantic-ui-react'
import Adv from '../components/advertisement'
import Newssummery from '../components/news/newsSummery'
import NewsDetail from "../components/news/newsDetail";


const newsData=[
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
    {title:'link to other news', link:'https://www.google.com'},
];
const newDetail={
    moreImagesUrl:["images/horse.jpg","images/horse.jpg","images/horse.jpg","images/horse.jpg" ],
    image_url:"images/horse.jpg",
    title:"اخبار سیاسی",
    dateTime:"97/10/1",
    sources:[
        {name:"farseNews",link : "https://www.farsnews.com"},
        {name:"Varzesh3",link : "https://www.varzesh3.com"},
    ],
    tages:[
        {name:"Hossein",link : "https://www.raja.ir"},
        {name:"all",link : "http://www.varzesh3.com"},
    ],
    body:" لاریجانی در این دیدار خطاب به رئیس دومای روسیه گفت: ملاقات‌های مکرر با شما نشان از عمق همکاری و دوستی دو کشور و اراده برای گسترش روابط دارد.\n" +
        "\n" +
        "وی با بیان اینکه مدل‌های همکاری به وجود آمده در منطقه قابل اقتباس برای سایر مسائل است، عنوان کرد: نشست آستانه یکی از نمونه‌های بارز همکاری میان کشورها برای حل بحرانی در منطقه است که ابتکار خوبی جهت حل مسئله سوریه بود.\n" +
        "\n" +
        "رئیس مجلس شورای اسلامی در پایان خاطرنشان کرد: ایران با استفاده از ظرفیت‌های داخل برای مقابله با تحریم‌ها آماده است.\n" +
        "\n" +
        "**شراکت راهبردی میان ایران و روسیه برای منافع مشترک دو طرف نیاز است\n" +
        "\n" +
        "ویاچسلاو والودین رئیس دومای روسیه نیز در این دیدار ضمن تشکر از میزبانی جمهوری اسلامی، گفت: این چهارمین دیدار ما در سال جاری است که نشان از اراده دو کشور برای تقویت روابط دارد.\n" +
        "\n" +
        "وی با بیان اینکه رؤسای جمهور روسیه و ایران دستورات مؤثری برای توسعه روابط دو کشور صادر کردند، اظهار داشت: دومای روسیه نیز در این خصوص اقدام به قانونگذاری‌های لازم خواهد کرد و در این راستا سازوکارهایی ایجاد کرده‌ایم تا گفتگوهای بین پارلمانی نیز گسترش یابد.\n" +
        "\n" +
        "رئیس دومای روسیه  با تأکید بر اینکه صرفاً برخی چالش‌های مشترک باعث قرابت روسیه و ایران نشده است، یادآور شد: معتقدیم شراکت راهبردی میان ایران و روسیه برای منافع مشترک دو طرف نیاز است.\n" +
        "\n" +
        "والودین در ادامه با ابراز آگاهی از چالش‌هایی که جمهوری اسلامی به واسطه تحریم‌های آمریکا با آن مواجه است، عنوان کرد: تحریم‌ها ما را بیش از پیش به یکدیگر نزدیک کرده و امروز تبدیل به یک ید واحد در برابر آنها شده و سیاست واحدی را در این حوزه دنبال می‌کنیم.\n" +
        "\n" +
        "رئیس دومای روسیه در پایان با ابراز امیدواری از اثربخش بودن کنفرانس پیش رو، خاطرنشان کرد: توسعه روابط منطقه‌ای و بین‌المللی در این اجلاس مورد بحث قرار می‌گیرد و لازم است شرایط برای توسعه هرچه بیشتر روابط میان 6 کشور بررسی شود.",
    comments:[
        {name:"حسین",comment:"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten ", date:'12/23'},
        {name:"مهدی",comment:" he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten ", date:'12/23'},
        {name:"مهدی",comment:"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that ave forgotten ", date:'12/23'},
        {name:"مهدی",comment:"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten ", date:'12/23'},
        {name:"علی اصغر",comment:"حاج حسین تو خوابگاه پیدا نمیشه", date:'10/9'},
    ]
};


class App extends Component {
    state = {
        newsData: newsData,
        newDetail:newDetail,
    };

    render() {
        const advertise = <Segment>advertise</Segment>;
        const news_image = <img src={require("images/horse.jpg")}
                                style={{"width": "12vw", "height": "12vh", "float": "right"}}/>;
        const news = <Segment style={{"overflow": "auto"}}>
            {news_image}
            <header style={{"text-decoration": "underline"}}><h2>Strong Hossein</h2></header>
            <div>Strong Hossein is back</div>
        </Segment>;
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        <Segment>
                            <Newssummery newsData={this.state.newsData}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <NewsDetail newDetail={this.state.newDetail}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Adv link={'http://www.yjc.ir/fa/ads/redirect/a/929'}
                             advertisement={'https://cdn.yjc.ir/files/adv/3955_459.gif'}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <div>
                <Template {...this.props} body={body}/>
            </div>);
    }
}
export default App;