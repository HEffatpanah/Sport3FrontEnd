import React, {Component} from 'react'
import {List} from "semantic-ui-react";

const listItem=[
    {title:'tractorhasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'perspoliasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjs', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
    {title:'esteglalasdaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjj', link:'https://www.google.com'},
]

export default class Newssummery extends Component{
    newsBody() {
        return (listItem.map(({title, link}) => {
                return (<List.Item href={link} target={'_blank'} >{title}</List.Item>)
            })
        )
    }
    render() {
        return (
            <List style={{ maxHeight: '50vh', overflow: 'auto', wordWrap:'break-word'}}>
                {/*<List.Item>yt</List.Item>*/}
                {this.newsBody()}
            </List>
        );
    }
}