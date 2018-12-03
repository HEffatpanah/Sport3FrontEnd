import React, { Component } from 'react';
import { Tab, Segment, Dropdown, Grid} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';

// class news extends Component{
//     render() {
//         return (
//
//         );
//     }
// }


class App extends Component {
    constructor(props) {
        super(props);
        this.getTodoList = this.getTodoList.bind(this);
        this.state = {
            Fnews: ['ali', 'taha'],
            Bnews: '',
            selectedSport : "football"
        };
    }
    getTodoList() {
        return this.state.Fnews.map((fnews,i) => {
            return <li key={i}>{fnews}</li>
        });
    }
    handleSelectorChange = (selectedOption) => {
        this.setState({selectedSport:selectedOption.value});
    };
    render() {

        const footballMatches = [
            { menuItem: 'favorite', render: () => <Tab.Pane><ul>{this.getTodoList()}</ul></Tab.Pane> },
            { menuItem: 'new', render: () => <Tab.Pane><div>Mahdi</div></Tab.Pane> },
        ];
        const basketballMatches = [
            { menuItem: 'favorite', render: () => <Tab.Pane><ul>{this.getTodoList()}</ul></Tab.Pane> },
            { menuItem: 'new', render: () => <Tab.Pane><div>Taha</div></Tab.Pane> },
        ];
        const pansMap = {
            "football":footballMatches,
            "basketball":basketballMatches,
        };
        // const myTab = () => {
        //     if(this.state.selectedSport === "football"){
        //         return (
        //             <div>
        //                 <div>{this.state.selectedSport}</div>
        //                 <Tab panes={footballMatches}/>
        //             </div>
        //         )
        //     }
        //     else{
        //         return (
        //             <div>
        //                 <div>{this.state.selectedSport}</div>
        //                 <Tab panes={basketballMatches}/>
        //             </div>
        //         )
        //     }
        // }
        // const sport_news =
        //     <div>
        //         <Segment>
        //             <div>Football</div>
        //             <Tab panes={footballMatches} />
        //         </Segment>
        //         <Segment>
        //             <div>Basketball</div>
        //             <Tab panes={basketballMatches} />
        //         </Segment>
        //     </div>;
        const options = [
            { value: 'football', label: 'football' },
            { value: 'basketball', label: 'basketball' },
        ];
        const news =
            <Segment>

                <a id="ew" href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
            </Segment>;

        const MatchesTable =
            <Segment>
                <Tab panes={pansMap[this.state.selectedSport]}/>
            </Segment>;
        const Selectbar =
            <Select placeholder='Select Sport'  search selection options={options} onChange={this.handleSelectorChange}/>;
        const body =
            <Grid style={{width:'100%'}}>
                <Grid.Row columns={1}>
                    <Grid.Column width={4}>
                        <Segment>
                            {Selectbar}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3} style={{height:'87%'}}>
                    <Grid.Column width={4}>
                        {news}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        {MatchesTable}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>adv</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;

        return (
            <div>
                <Template {...this.props} template={{body:body}} />
            </div>
        );
    }
}
export default App;