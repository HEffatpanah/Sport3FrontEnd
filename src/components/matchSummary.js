import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import {Tab} from 'semantic-ui-react'
import {Translate} from "react-localize-redux";
import _ from "lodash";


export default class MatchesSummaryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            column: null,
            direction: null,
            matchesData: this.props.matchesData['tableBody'][0]['matches'],
        };
        this.redirect_to_match = this.redirect_to_match.bind(this)
    }

    redirect_to_match(e, {mode}) {
        var senderElement = e.target;
        console.log('ali salam', senderElement);
        // Check if sender is the <div> element e.g.
        // if (senderElement=== this) {
        //     window.location.href = value;
        // }

    }

    handleSort = clickedColumn => () => {
        const {matches, league_season} = this.props.matchesData['tableBody'][0];
        if (this.state.column !== clickedColumn) {

            this.setState({
                matchesData: _.sortBy(matches, [clickedColumn]),
                column: clickedColumn,
                direction: 'ascending'
            });
            console.log(this.state.matchesData);
            return
        }
        this.setState({
            matchesData: matches.reverse(),
            direction: this.state.direction === 'ascending' ? 'descending' : 'ascending',
        })
    };


    getTableData() {
        let active = true;
        // const tableBody = this.props.matchesData['tableBody'].map((session) => {
        // if ((session['league_season'] === this.props.session) || this.props.session === 'all') {
        const tableBody =
            this.state.matchesData.map((data) => {
                active = !active;
                let result;
                if (data['date'] === 'فردا')
                    result = '-';
                else
                    result = data['team2Goal'] + '-' + data['team1Goal'];
                return (
                    <Table.Row onClick={this.redirect_to_match} mode={data['matchLink']} active={active}
                               style={{'width': '100%'}}>
                        {/*<a href={data['matchLink']}>*/}
                        <Table.Cell width={2}><a href={data['team1Link']}
                                                 target='_blank'>{data['team1Name']}</a></Table.Cell>
                        <Table.Cell width={1}>{result}</Table.Cell>
                        <Table.Cell width={2}><a href={data['team2Link']}
                                                 target='_blank'>{data['team2Name']}</a></Table.Cell>
                        <Table.Cell width={1}>{data['date']}</Table.Cell>
                        {/*</a>*/}
                    </Table.Row>
                )
            })

        // }
        // );
        const tableHeader = this.props.matchesData['tableHeader'].map((data) => {
                if (data === 'نتیجه')
                    return (
                        <Table.HeaderCell style={{backgroundColor: '#bc001a', color: 'white'}}> {data}</Table.HeaderCell>
                    );
                else
                    return (
                        <Table.HeaderCell sorted={this.state.column === data ? this.state.direction : null}
                                          onClick={this.handleSort(data)}
                                          style={{backgroundColor: '#bc001a', color: 'white'}}> {data}</Table.HeaderCell>
                    );
            }
        );
        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        {tableHeader}
                    </Table.Row>
                </Table.Header>
                <Table.Body>{tableBody}</Table.Body>
            </Table>
        )
    };

    render() {
        console.log('lkkj');
        const all = <Translate id="all"/>;
        const fav = <Translate id="favorite"/>;
        const panes = [
            {
                menuItem: {key: 'all', content: all}, render: () => <Tab.Pane>{this.getTableData()}</Tab.Pane>

            },
            {
                menuItem: {key: 'favorite', content: fav},
                render: () => <Tab.Pane>
                    <div>Mahdi</div>
                </Tab.Pane>
            },
        ];

        // const MatchesTable =


        return (
            <Tab panes={panes}/>
        );
    }
}