import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsList = () => {

    const [data , setData ] = useState([])
    const getResult = async()=>{
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57042d008dda44c28dd28a5859812ad8');

        let res = await response.json();
        
        setData(await res);
    };

    // const getData = async ()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-BingApis-SDK': 'true',
    //             'X-RapidAPI-Key': '24267c6c36msh467ce46c6269739p1fcc5djsn1ed55df1766e',
    //             'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    //         }
    //     };
        
    //   const response = await fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options);
    //   let res = await response.json();
    //   console.log(res.value);
            
    // }

    useEffect( () => {
    
        getResult();
        // getData();

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