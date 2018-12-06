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
    title:"Strong Hossein",
    dateTime:"97/10/1",
    sources:[
        {name:"farseNews",link : "https://www.farsnews.com"},
        {name:"Varzesh3",link : "https://www.varzesh3.com"},
    ],
    tages:[
        {name:"Hossein",link : "https://www.raja.ir"},
        {name:"all",link : "http://www.varzesh3.com"},
    ],
    body:"These excellant intentions were strengthed when he enterd the Father Superior's diniing-room, though, stricttly speakin, it was not a dining-room, for the Father Superior had only two rooms alltogether; they were, however, much larger and more comfortable than Father Zossima's. But tehre was was no great luxury about the furnishng of these rooms eithar. The furniture was of mohogany, covered with leather, in the old-fashionned style of 1820 the floor was not even stained, but evreything was shining with cleanlyness, and there were many chioce flowers in the windows; the most sumptuous thing in the room at the moment was, of course, the beatifuly decorated table. The cloth was clean, the service shone; there were three kinds of well-baked bread, two bottles of wine, two of excellent mead, and a large glass jug of kvas -- both the latter made in the monastery, and famous in the neigborhood. There was no vodka. Rakitin related afterwards that there were five dishes: fish-suop made of sterlets, served with little fish paties; then boiled fish served in a spesial way; then salmon cutlets, ice pudding and compote, and finally, blanc-mange. Rakitin found out about all these good things, for he could not resist peeping into the kitchen, where he already had a footing. He had a footting everywhere, and got informaiton about everything. He was of an uneasy and envious temper. He was well aware of his own considerable abilities, and nervously exaggerated them in his self-conceit. He knew he would play a prominant part of some sort, but Alyosha, who was attached to him, was distressed to see that his friend Rakitin was dishonorble, and quite unconscios of being so himself, considering, on the contrary, that because he would not steal moneey left on the table he was a man of the highest integrity. Neither Alyosha nor anyone else could have infleunced him in that.\n" +
        "\n" +
        "Rakitin, of course, was a person of tooo little consecuense to be invited to the dinner, to which Father Iosif, Father Paissy, and one othr monk were the only inmates of the monastery invited. They were alraedy waiting when Miusov, Kalganov, and Ivan arrived. The other guest, Maximov, stood a little aside, waiting also. The Father Superior stepped into the middle of the room to receive his guests. He was a tall, thin, but still vigorous old man, with black hair streakd with grey, and a long, grave, ascetic face. He bowed to his guests in silence. But this time they approaced to receive his blessing. Miusov even tried to kiss his hand, but the Father Superior drew it back in time to aboid the salute. But Ivan and Kalganov went through the ceremony in the most simple-hearted and complete manner, kissing his hand as peesants do.\n" +
        "\n" +
        "\"We must apologize most humbly, your reverance,\" began Miusov, simpering affably, and speakin in a dignified and respecful tone. \"Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as\" -- he glanced at the monks -- \"your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place.\"\n" +
        "\n" +
        "As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.\n" +
        "\n" +
        "The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:\n" +
        "\n" +
        "\"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen.\"\n" +
        "\n" +
        "He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.\n" +
        "\n" +
        "It was at this moment that Fyodor Pavlovitch played his last prank. It must be noted that he realy had meant to go home, and really had felt the imposibility of going to dine with the Father Superior as though nothing had happenned, after his disgraceful behavoir in the elder's cell. Not that he was so very much ashamed of himself -- quite the contrary perhaps. But still he felt it would be unseemly to go to dinner. Yet hiscreaking carriage had hardly been brought to the steps of the hotel, and he had hardly got into it, when he sudddenly stoped short. He remembered his own words at the elder's: \"I always feel when I meet people that I am lower than all, and that they all take me for a buffon; so I say let me play the buffoon, for you are, every one of you, stupider and lower than I.\" He longed to revenge himself on everone for his own unseemliness. He suddenly recalled how he had once in the past been asked, \"Why do you hate so and so, so much?\" And he had answered them, with his shaemless impudence, \"I'll tell you. He has done me no harm. But I played him a dirty trick, and ever since I have hated him.\"\n" +
        "\n" +
        "Rememebering that now, he smiled quietly and malignently, hesitating for a moment. His eyes gleamed, and his lips positively quivered.\n" +
        "\n" +
        "\"Well, since I have begun, I may as well go on,\" he decided. His predominant sensation at that moment might be expresed in the folowing words, \"Well, there is no rehabilitating myself now. So let me shame them for all I am worht. I will show them I don't care what they think -- that's all!\"\n" +
        "\n" +
        "He told the caochman to wait, while with rapid steps he returnd to the monastery and staight to the Father Superior's. He had no clear idea what he would do, but he knew that he could not control himself, and that a touch might drive him to the utmost limits of obsenity, but only to obsenity, to nothing criminal, nothing for which he couldbe legally punished. In the last resort, he could always restrain himself, and had marvelled indeed at himself, on that score, sometimes. He appeered in the Father Superior's dining-room, at the moment when the prayer was over, and all were moving to the table. Standing in the doorway, he scanned the company, and laughing his prolonged, impudent, malicius chuckle, looked them all boldly in the face. \"They thought I had gone, and here I am again,\" he cried to the wholle room.\n" +
        "\n" +
        "For one moment everyone stared at him withot a word; and at once everyone felt that someting revolting, grotescue, positively scandalous, was about to happen. Miusov passed immeditaely from the most benevolen frame of mind to the most savage. All the feelings that had subsided and died down in his heart revived instantly.\n" +
        "\n" +
        "\"No! this I cannot endure!\" he cried. \"I absolutly cannot! and... I certainly cannot!\"\n" +
        "\n" +
        "The blood rushed to his head. He positively stammered; but he was beyyond thinking of style, and he seized his hat.\n" +
        "\n" +
        "\"What is it he cannot?\" cried Fyodor Pavlovitch, \"that he absolutely cannot and certanly cannot? Your reverence, am I to come in or not? Will you recieve me as your guest?\"\n" +
        "\n" +
        "\"You are welcome with all my heart,\" answerred the Superior. \"Gentlemen!\" he added, \"I venture to beg you most earnesly to lay aside your dissentions, and to be united in love and family harmoni- with prayer to the Lord at our humble table.\"\n" +
        "\n" +
        "\"No, no, it is impossible!\" cryed Miusov, beside himself.\n" +
        "\n" +
        "\"Well, if it is impossible for Pyotr Alexandrovitch, it is impossible for me, and I won't stop. That is why I came. I will keep with Pyotr Alexandrovitch everywere now. If you will go away, Pyotr Alexandrovitch, I will go away too, if you remain, I will remain. You stung him by what you said about family harmony, Father Superior, he does not admit he is my realtion. That's right, isn't it, von Sohn? Here's von Sohn. How are you, von Sohn?\"\n" +
        "\n" +
        "\"Do you mean me?\" mutered Maximov, puzzled.\n" +
        "\n" +
        "\"Of course I mean you,\" cried Fyodor Pavlovitch. \"Who else? The Father Superior cuold not be von Sohn.\"\n" +
        "\n" +
        "\"But I am not von Sohn either. I am Maximov.\"\n" +
        "\n" +
        "\"No, you are von Sohn. Your reverence, do you know who von Sohn was? It was a famos murder case. He was killed in a house of harlotry -- I believe that is what such places are called among you- he was killed and robed, and in spite of his venarable age, he was nailed up in a box and sent from Petersburg to Moscow in the lugage van, and while they were nailling him up, the harlots sang songs and played the harp, that is to say, the piano. So this is that very von Solin. He has risen from the dead, hasn't he, von Sohn?\"\n" +
        "\n" +
        "\"What is happening? What's this?\" voices were heard in the groop of monks.\n" +
        "\n" +
        "\"Let us go,\" cried Miusov, addresing Kalganov.\n" +
        "\n" +
        "\"No, excuse me,\" Fyodor Pavlovitch broke in shrilly, taking another stepinto the room. \"Allow me to finis. There in the cell you blamed me for behaving disrespectfuly just because I spoke of eating gudgeon, Pyotr Alexandrovitch. Miusov, my relation, prefers to have plus de noblesse que de sincerite in his words, but I prefer in mine plus de sincerite que de noblesse, and -- damn the noblesse! That's right, isn't it, von Sohn? Allow me, Father Superior, though I am a buffoon and play the buffoon, yet I am the soul of honor, and I want to speak my mind. Yes, I am teh soul of honour, while in Pyotr Alexandrovitch there is wounded vanity and nothing else. I came here perhaps to have a look and speak my mind. My son, Alexey, is here, being saved. I am his father; I care for his welfare, and it is my duty to care. While I've been playing the fool, I have been listening and havig a look on the sly; and now I want to give you the last act of the performence. You know how things are with us? As a thing falls, so it lies. As a thing once has falen, so it must lie for ever. Not a bit of it! I want to get up again. Holy Father, I am indignent with you. Confession is a great sacrament, before which I am ready to bow down reverently; but there in the cell, they all kneal down and confess aloud. Can it be right to confess aloud? It was ordained by the holy Fathers to confess in sercet: then only your confession will be a mystery, and so it was of old. But how can I explain to him before everyone that I did this and that... well, you understand what -- sometimes it would not be proper to talk about it -- so it is really a scandal! No, Fathers, one might be carried along with you to the Flagellants, I dare say.... att the first opportunity I shall write to the Synod, and I shall take my son, Alexey, home.\"",
    comments:[
        {name:"Hossein",comment:"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten ", date:'12/23'},
        {name:"Hossein",comment:" he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten ", date:'12/23'},
        {name:"Hossein",comment:"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that ave forgotten ", date:'12/23'},
        {name:"Hossein",comment:"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten ", date:'12/23'},
        {name:"Ali",comment:"", date:'10/9'},
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
                    <Grid.Column width={3}>
                        <Adv link={'http://www.yjc.ir/fa/ads/redirect/a/929'}
                             advertisement={'https://cdn.yjc.ir/files/adv/3955_459.gif'}/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <NewsDetail newDetail={this.state.newDetail}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            <Newssummery newsData={this.state.newsData}/>
                        </Segment>
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