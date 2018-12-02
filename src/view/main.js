import React, { Component } from 'react';
import { Tab, Segment, Dropdown} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';





class App extends Component {
    constructor(props) {
        super(props);
        this.getTodoList = this.getTodoList.bind(this);
        this.state = {
            Fnews: ['ali'],
            Bnews: '',
            selectedSport : "football"
        };
        this.state.Fnews.push('mammad');
    }
    getTodoList() {
        return this.state.Fnews.map((fnews,i) => {
            return <li key={i}>{fnews}</li>
        });
    }
    handleSelectorChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption.value);
        if(selectedOption.value === "football"){
            this.setState({selectedSport:"football"})
        }
        else{
            this.setState({selectedSport:"basketball"})
        }
    };
    render() {

        const footballNews = [
            { menuItem: 'favorite', render: () => <Tab.Pane><ul>{this.getTodoList()}</ul></Tab.Pane> },
            { menuItem: 'new', render: () => <Tab.Pane><div>Mahdi</div></Tab.Pane> },
        ];
        const basketballNews = [
            { menuItem: 'favorite', render: () => <Tab.Pane><ul>{this.getTodoList()}</ul></Tab.Pane> },
            { menuItem: 'new', render: () => <Tab.Pane><div>Taha</div></Tab.Pane> },
        ];
        const myTab = () => {
            if(this.state.selectedSport === "football"){
                return (
                    <div>
                        <div>{this.state.selectedSport}</div>
                        <Tab panes={footballNews}/>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <div>{this.state.selectedSport}</div>
                        <Tab panes={basketballNews}/>
                    </div>
                )
            }
        }
        const sport_news =
            <div>
                <Segment>
                    <div>Football</div>
                    <Tab panes={footballNews} />
                </Segment>
                <Segment>
                    <div>Basketball</div>
                    <Tab panes={basketballNews} />
                </Segment>
            </div>;
        const options = [
            { value: 'football', label: 'football' },
            { value: 'basketball', label: 'basketball' },
        ];
        const news =
            <Segment>

                <a id="ew" href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">ews</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
            </Segment>;

        const onGoing =
            <Segment>
                <div>on goings</div>
                <Select placeholder='Select Sport' search selection options={options} onChange={this.handleSelectorChange}/>
                <br/>
                {myTab()}
            </Segment>;
        return (



            <div>
                <Template {...this.props} template={{column_1: news, column_2: sport_news, column_3: onGoing, width_1:4, width_2:8, width_3:4}} />
            </div>
        );
    }
}
export default App;