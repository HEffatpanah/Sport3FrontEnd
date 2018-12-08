import React,{Component} from "react";
import TimeLine from '../components/match/timeLine'
import MatchInfo from '../components/match/matchInfo'
import PlayersInfo from '../components/match/playersInfo'
import OnlineReport from '../components/match/onlineReport'
import FringeNews from '../components/match/fringeNews'
import MultiMedia from '../components/match/multiMedia'

import { Menu,Grid, Dropdown, Icon} from 'semantic-ui-react'
import Template from '../components/template'


const matchRecord = {
    tableData: [
        {featureName: 'کرنرها', featureValue: 5},
        {featureName: 'تعداد خطاها', featureValue: 7},
        {featureName: 'موقعیت گل ها', featureValue: 2},
        {featureName: 'تعداد گل ها', featureValue: 1},
        {featureName: 'درصد مالکیت توپ', featureValue: '20%'},
    ],
};




export default class Match extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        const body =
            <Grid>
                <Grid.Row style={{width:'100%'}} columns={2}>
                    <Grid.Column>
                        {/*<TimeLine/>*/}
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Grid.Row columns={1}>
                            <Grid.Column width={16}><MatchInfo matchRecord={matchRecord}/></Grid.Column>
                            {/*<Grid.Column><PlayersInfo/></Grid.Column>*/}
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            {/*<Grid.Column><OnlineReport/></Grid.Column>*/}
                            {/*<Grid.Column><FringeNews/></Grid.Column>*/}
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            {/*<Grid.Column><MultiMedia/></Grid.Column>*/}
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        return(
            <Template {...this.props} body={body}/>
        );
    }
}