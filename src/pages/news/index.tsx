import React from "react";
import Link from "next/link";

const News = ()=>{
    return (<React.Fragment> 
        <h1>This is news page</h1>
        <ul>
            <li><Link href="/news/Boris%20Baker%20wins%20Wimbledon%20at%2017">Boris Baker wins Wimbledon at 17</Link></li>
            <li><Link href="/news/OJ%20Simpson%20convicted%20for%20killing%20his%20wife,%203%20children">OJ Simpson convicted for killing his wife, 3 children</Link></li>
            <li><Link href="/news/Columbia%20shuttle%20disaster%20-%20NASA%20to%20hold%20press%20conference">Columbia shuttle disaster - NASA to hold press conference</Link></li>
            <li><Link href="/news/Indian%20Prime%20Minister%20Mrs%20Gandhi%20assassinated%20by%20own%20security%20team">Indian Prime Minister Mrs Gandhi assassinated by own security team</Link></li>
        </ul>
    </React.Fragment>)
}

export default News;