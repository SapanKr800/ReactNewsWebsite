import React, { Component } from 'react'
import Spinner from './Spinner';
export class News extends Component {

constructor(){
    super();
    this.state = {
        articles: [],
        loading:false
    }
    
  }

  async componentDidMount(){

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=335c0e75fcf04cf18fbb1507f9ed273f`;
    this.setState({loading: true});
    let data = await fetch(url);
    let newsData = await data.json()
     

    this.setState({
        articles: newsData.articles,
        loading:false
        
    })
   
  }

  render() {
   
    return (
      <>
   <div className="container-fluid newsItem">
  <div className="row">

   {this.state.loading && <Spinner/>}

{this.state.articles.map((eachNews)=>{

return   <div className="col-md-3 col-sm-4 col-12 cardDiv" key={eachNews.url}>
   

   <div className="card">
<img src={!eachNews.urlToImage?"defaultimg.png":eachNews.urlToImage} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{eachNews.title?eachNews.title.slice(0,60):""}......</h5>
  <p className="card-text">{eachNews.description?eachNews.description.slice(0,100):""}......</p>
  <a href={eachNews.url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
</div>
</div>
   </div>
 
   
}) }

</div>
</div>

  </>
    )
  }
}

export default News
