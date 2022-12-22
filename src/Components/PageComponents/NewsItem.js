import React from "react";
import '../styles/newsItem.css';

const NewsItem = ({data}) => {
    
    let res;
    if(data){

         res = data.map((res) => {
            return (
                
                <li key={res.datePublished}>
                    <h2>{res.name}</h2>
                    <div className="newsItem">
                        <div className="content-left">                        
                             <img className="cnt-img" src="https://source.unsplash.com/1600x500/?news" alt="img" />
                        </div>

                        <div className="content-right">
                            <p>{res.description}</p>
                            <button className="link-btn"><a className="click" href={res.url}>Read More</a></button>
                        </div>
                    </div>
                </li> 
                )
            })
        }

    
    
    
    return(
        <>
        <div className="box news-box">
            <ul>{res}</ul>
        </div>
        
        </>
    );
};

export default NewsItem;