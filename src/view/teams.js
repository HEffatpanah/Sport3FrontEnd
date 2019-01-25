import React, {Component} from 'react'
import {Grid, Loader, Segment} from 'semantic-ui-react'
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
            newsData: null,
            membersData: null,
            matchData: null,
            teamName:null,
            logo: null,
            get: false
        };
        this.get_data()
    }

    get_data() {
        let url = window.location.href
        url = url.replace('3', '8')
        axios.defaults.withCredentials = true;
        console.log('ali')
        axios.get(url).then(response => {
            console.log(response)
            this.setState({
                newsData: response.data['newsData'],
                membersData: response.data['membersData'],
                matchData: response.data['matchData'],
                teamName: response.data['teamName'],
                logo: response.data['logo'],
                get: true,
            })

        })
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        const body =
            <Grid style={{width: '100%'}}>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        <Grid.Row style={{textAlign:'center'}}>
                            <img src={require("../../../../Backend/images/" + this.state.logo)}/>
                        </Grid.Row>
                        <Grid.Row style={{textAlign:'center', fontSize:'2em', fontStyle:'bold', marginBottom:'0.3em'}}>

                            {this.state.teamName}
                        </Grid.Row>
                        <Grid.Row>
                            <Segment><NewsSummery newsData={this.state.newsData}/></Segment>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <TeamMembers teamMembersData={this.state.membersData}/>
                    </Grid.Column>
                    <Grid.Column width={5}>
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