import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsList = () => {

    const [data , setData ] = useState([])
    const getResult = async()=>{
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57042d008dda44c28dd28a5859812ad8');

        let res = await response.json();
        
        setData(await res);
    }

    useEffect( () => {
    
        getResult();

    },[]);

   


    return(
        <>
        <div>
            {  
               " Loading...." &&  <NewsItem  data={data.articles}/>
            }
        </div>
        </>
    );
};

export default NewsList;