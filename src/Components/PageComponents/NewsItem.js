import React from "react";
import '../styles/newsItem.css';

const NewsItem = ({data}) => {
    console.log(data);
    let res;
    if(data){

         res = data.map((res) => {
            return (
                
                <li key={res.title}>
                    <h2>{res.title}</h2>
                    <div className="newsItem">
                        <div className="content-left">                        
                             <img src={res.urlToImage} alt="" />
                        </div>

                        <div className="content-right">
                            <p>{res.content}</p>
                            <button><a className="click" href={res.url}>Read More</a></button>
                        </div>
                    </div>
                </li>
                )
            })
        }

    
    
    
    return(
        <>
        <div className="box">
            <ul>{res}</ul>
        </div>
        
        </>
    );
};

export default NewsItem;