import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid} from 'semantic-ui-react'
const data=[];
export default class SearchBar extends Component {
    constructor(prop){
        super(prop);

        this.props.sessionName.map((session) => {
            data.push({title:session})
        })
    }
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })
    handleResultSelect = (e, {result}) => {

        this.props.sessoinSelector(result.title)
        this.resetComponent()
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: data.filter(isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                </Grid.Column>

            </Grid>
        )
    }
}
