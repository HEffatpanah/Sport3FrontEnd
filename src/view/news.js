import React, { Component } from 'react';
import Template from '../components/template'





class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const advertise = <div>advertise</div>;
        const news = <div>The Strong Hossein is back</div>;
        const news_image = <img href={'./images/horse.jpg'}/>;
        const other_news = <div>
            <div><a>Hossein1</a></div>
            <div><a>Hossein2</a></div>
            <div><a>Hossein3</a></div>
            <div><a>Hossein4</a></div>
        </div>;
        return (
            <div>
                <Template {...this.props} template={{column_1: advertise, column_2: news_image, column_3: other_news}}/>
            </div>);
    }
}
export default App;