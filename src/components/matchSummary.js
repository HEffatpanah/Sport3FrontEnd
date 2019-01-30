import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import {Tab} from 'semantic-ui-react'
import {Translate} from "react-localize-redux";


export default class MatchesSummaryTable extends Component {
    constructor(props) {
        super(props);
    }

    foo(link, e) {
        var senderElement = e.target;
        console.log('ali salam', senderElement);
        // Check if sender is the <div> element e.g.
        if (senderElement=== this) {
            window.location.href = link;
        }

    }

    getTableData() {
        let active = true;
        const tableBody = this.props.matchesData['tableBody'].map((session) => {
                // if ((session['league_season'] === this.props.session) || this.props.session === 'all') {
                if (true) {
                    console.log('salamsalam           ', session['matches']);
                    return session['matches'].map((data) => {
                        active = !active;
                        return (
                            <Table.Row onClick={this.foo.bind(this, data['matchLink'])} active={active}
                                       style={{'width': '100%'}}>
                                <a href={data['matchLink']}>
                                <Table.Cell width={2}><a href={data['team1Link']}
                                                         target='_blank'>{data['team1Name']}</a></Table.Cell>
                                <Table.Cell width={1}>{data['team2Goal'] + '-' + data['team1Goal']}</Table.Cell>
                                <Table.Cell width={2}><a href={data['team2Link']}
                                                         target='_blank'>{data['team2Name']}</a></Table.Cell>
                                <Table.Cell width={1}>{data['date']}</Table.Cell>
                                </a>
                            </Table.Row>
                        )
                    })
                }
            }
        );
        const tableHeader = this.props.matchesData['tableHeader'].map((data) => {
                return (
                    <Table.HeaderCell style={{backgroundColor: '#bc001a', color: 'white'}}> {data}</Table.HeaderCell>
                )
            }
        );
        console.log('lkj')
        return (
            <Table>
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