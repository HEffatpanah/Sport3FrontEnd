import _ from 'lodash'
import React, {Component} from 'react'
import {Search, Grid} from 'semantic-ui-react'


export default class SearchBar extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: []
        };
        this.props.sessionName.map((session) => {
            if (session[0] === this.props.sport) {
                console.log('constructor', session[1])
                this.state.data.push({title: session[1], link: session[2]})
            }
        });
        console.log('data', this.state.data)
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''})
    handleResultSelect = (e, {result}) => {

        this.resetComponent();

        window.location.replace(result.link);
    }

    handleSearchChange = (e, {value}) => {
        this.setState({isLoading: true, value})

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()
            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: this.state.data.filter(isMatch),
            })
        }, 300)
    }

    render() {
        const {isLoading, value, results} = this.state

        return (
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                </Grid.Column>

            </Grid>
        )
    }
}
