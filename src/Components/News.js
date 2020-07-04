import React, { Component } from 'react'
import './News.css'
import pic from '../picture/pic.png'


class News extends Component {

    constructor(props) {

        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {

        fetch(`https://newsapi.org/v2/everything?q=PAKISTAN &apiKey=d94c4c05ef02463b96a8607ef9314103`)

            .then(response => response.json())
            .then(data => { this.setState({ articles: data.articles }) });
    }


    render() {



        return (
            <div className='main-container'>


                <div className="blink"> <img src={pic} alt='blink' /> <span>  Latest News</span></div>

                {this.state.articles.map((item, index) => {

                    return (
                        <div className='new'>

                            <h2 >{item.title} <br />
                                <a href={item.url} >Read More </a>
                                <img src={item.urlToImage} alt ='news' />
                            </h2>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default News