import React, { Component } from 'react'


export class NewsItem extends Component {


  render() {
    let  {title,imageUrl,newsUrl,publishedAt,author} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem",}}>
  <img src={imageUrl} style={{height: "200px",width: "100%"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{title}....</h5>
    <p className="card- py-2"><small className="text-muted">By {!author?"Unknown":author} on {new Date (publishedAt).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="container my-1 btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

