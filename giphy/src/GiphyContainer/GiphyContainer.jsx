import React, {Component} from 'react'
import GiphySearch from './GiphySeach'

// have the data show up after the search bar query is entered
// onSubmit={this.props.getGiphys.bind(null, this.state.giphy)}

class GetGiphy extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            giphys: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    getGiphys = async () => {
        try {
            const giphy = await fetch('http://api.giphy.com/v1/gifs/search?api_key=gOo46PIR8rfEc3oWhnh7j6hUlLNZn1jA&q=' + this.state.query + '&limit=8')
            const giphyJson = await giphy.json();
            console.log(giphyJson.data)
            return giphyJson.data
        } catch(err) {
            return(err)
        }
    }
    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        }) 
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.getGiphys().then((giphys) => {
            console.log(giphys, ' this is data');
            this.setState({giphys: giphys});
          }).catch((err) => {
            console.log(err);
          });
    }      
    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="search giphy" name="query" onChange={this.handleInputChange} required/>
                <button type="submit" value="generate">Search Giphy</button>
            </form>
            <br/>
                Giphy Results Here <br/>
            <GiphySearch giphys={this.state.giphys}/>
            </div>
        )
    }
}
console.log('end of giphy container')

export default GetGiphy;