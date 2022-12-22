import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsList = () => {

    const [newData , setNewData] = useState([]);
    // const getResult = async()=>{
    //     const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57042d008dda44c28dd28a5859812ad8');

    //     let res = await response.json();
        
    //     setData(await res);
    // };

    // {
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '24267c6c36msh467ce46c6269739p1fcc5djsn1ed55df1766e',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };  
        const Result = async ()=>{
        const response = await  fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options);

        let res = await response.json();
        setNewData(await res.value);
        console.log(newData)
        // console.log(res.articles);
        };
        
           
    // }
  
    useEffect( () => {
    
        // getResult();
        Result();
      

    },[]);

   


    return(
        <>
        <div>
            {  
               " Loading...." &&  <NewsItem  data={newData}/>
            }
        </div>
        </>
    );
};

export default NewsList;