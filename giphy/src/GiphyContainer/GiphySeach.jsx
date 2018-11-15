import React from 'react'

console.log('giphy search 1')
const GiphySearch = (props) => {
    console.log('giphy search 2')
    const giphys = props.giphys.map((giphys, i) => {
        return <div id="query" key={i}>
            <ul>
                {giphys.title}<br/>
                <img src={giphys.images.original.url} width={270} height={270}/>
            </ul> 
        </div>
    })
    console.log('giphy search 3')
    return (
        <div>
            {giphys}
        </div>
    )
}
console.log('giphy search last')
export default GiphySearch;