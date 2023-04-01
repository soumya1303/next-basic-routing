import React from "react";
import {useRouter} from "next/router";

const NewsItem = ()=>{

    const router = useRouter();

    return (<div>
                <h2>News item # </h2>
                <p>{router.query.newsId}</p>
            </div>)
}

export default NewsItem;