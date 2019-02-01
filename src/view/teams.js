import React, {Component} from 'react'
import {Checkbox, Grid, Loader, Segment, Button} from 'semantic-ui-react'
import {Translate, withLocalize} from "react-localize-redux";
import Template from '../components/template'
import MatchesTable from '../components/team/matchInfo'
import TeamMembers from "../components/team/teamMember";
import NewsSummery from '../components/news/newsSummery'
import axios from "axios";
import globalTranslations from "../translations/global";


const matchData = [
    {
        ownerTeamGoal: '3',
        opponentTeamGoal: '0',
        date: '1998-09-12',
        score: 3,
        status: "برد",
        opponent: 'پدیده',
        opponentLink: 'https://www.google.com'
    },
    {
        ownerTeamGoal: '2',
        opponentTeamGoal: '0',
        date: '1998-09-12',
        score: 1,
        status: "برد",
        opponent: 'پدیده',
        opponentLink: 'https://www.google.com'
    },
    {
        ownerTeamGoal: '3',
        opponentTeamGoal: '0',
        date: '1998-09-12',
        score: 3,
        status: "برد",
        opponent: 'پدیده',
        opponentLink: 'https://www.google.com'
    },
    {
        ownerTeamGoal: '3',
        opponentTeamGoal: '0',
        date: '1998-09-12',
        score: 3,
        status: "برد",
        opponent: 'پدیده',
        opponentLink: 'https://www.google.com'
    },
];

// const center_vertically={
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
// }


const newsData = [
    {
        title: 'tractorhasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'perspoliasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjs',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
    {
        title: 'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj',
        link: 'https://www.google.com'
    },
];

const image_style = {
    height: '8vh',
    width: '5vw',
};

const membersData = {
    tableHeader: ['نام', 'سن', 'پست', 'عکس'],
    tableBody: [
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'دفاع', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'حمله', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'حمله', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'حمله', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'علی', featureLink: 'https://www.google.com'},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'حمله', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'حسین', featureLink: null},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'مدیر', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },
        {
            memberInfo: [
                {featureName: 'playerName', featureValue: 'حسین', featureLink: null},
                {featureName: 'age', featureValue: 23, featureLink: null},
                {featureName: 'position', featureValue: 'مدیر', featureLink: null},
                {
                    featureName: 'photo',
                    featureValue: 'http://www.gstatic.com/tv/thumb/persons/673351/673351_v9_ba.jpg',
                    featureLink: null
                },
            ]
        },

    ]
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: [],
            membersData: null,
            matchData: null,
            teamName: null,
            logo: null,
            get: false,
            logged_in: false,
            subscribed: false,
        };
        this.get_data();
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.getRelatedNews = this.getRelatedNews.bind(this)
    }

    get_data() {
        let url = window.location.href;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;

        // let bodyFormData = new FormData();
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
        console.log('asasasas', sessionStorage.getItem('Authorization'));
        // bodyFormData.set('username', localStorage.getItem('username'));
        // axios({
        //     method: 'post',
        //     url: url,
        //     data: bodyFormData,
        //     config: {headers: {'Content-Type': 'multipart/form-data'}}
        // });
        axios.get(url).then(response => {
            console.log(response);
            this.setState({
                newsData: response.data['newsData'],
                membersData: response.data['membersData'],
                matchData: response.data['matchData'],
                teamName: response.data['teamName'],
                logo: response.data['logo'],
                get: true,
                logged_in: response.data['logged_in']
            })

        })
    }

    handleCheckBox(e, {checked}) {
        axios.defaults.withCredentials = true;
        if (checked) {
            let bodyFormData = new FormData();
            bodyFormData.set('username', localStorage.getItem('username'));
            bodyFormData.set('type', 'team1');
            bodyFormData.set('name', this.state.teamName);
            axios({
                method: 'post',
                url: 'http://localhost:8000/sport3/subscribe',
                data: bodyFormData,
                config: {headers: {'Content-Type': 'multipart/form-data'}}
            });
        }

    }

    get_checkbox() {
        if (this.state.logged_in === 'yes')
            return (
                <Checkbox slider label='مورد علاقه' checked={this.state.subscribed}
                          onClick={this.handleCheckBox}/>)
        return
    }

    getRelatedNews(e,{mode}) {
        this.setState({
            get:false,
        })
        let url = window.location.href;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        let self=this
        let bodyFormData = new FormData();
        bodyFormData.set('username', localStorage.getItem('username'));
        bodyFormData.set('type', 'relatedNews');
        bodyFormData.set('mode', mode);
        axios({
            method: 'post',
            url: url,
            data: bodyFormData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(response => {
            console.log(response);
            self.setState({
                newsData: response.data['newsData'],
                get:true,
            })

        })
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        console.log(1)
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        {this.get_checkbox()}
                        <Grid.Row style={{textAlign: 'center'}}>
                            <img style={{maxWidth: "100%"}}
                                 src={require("../../../Backend/images/" + this.state.logo)}/>
                        </Grid.Row>
                        <Grid.Row
                            style={{
                                textAlign: 'center',
                                fontSize: '2em',
                                fontStyle: 'bold',
                                marginBottom: '0.3em'
                            }}>

                            {this.state.teamName}
                        </Grid.Row>
                        <Grid.Row>
                            <Segment>
                                <Button.Group color='blue'>
                                    <Button mode={1} onClick={this.getRelatedNews}>{<Translate id="news_title"/>}</Button>
                                    <Button mode={2} onClick={this.getRelatedNews}>{<Translate id="news_tags"/>}</Button>
                                    <Button mode={3} onClick={this.getRelatedNews}>{<Translate id="news_body"/>}</Button>
                                </Button.Group>
                                <NewsSummery newsData={this.state.newsData}/>
                            </Segment>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TeamMembers teamMembersData={this.state.membersData}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <MatchesTable matchesData={this.state.matchData}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <Template {...this.props} body={body}/>

        )
    }
}

export default App