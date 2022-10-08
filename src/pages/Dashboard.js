import React from "react";
import { Link } from "react-router-dom";
import Stocks from "../components/stock-data";
const Dashboard = (props) => {
    return (
        <div className="dashboard">
            {Stocks.map((stock, idx) => {
            const {name, symbol} = stock;
            return(
                
                <Link to ={`/stocks/${symbol}`}>
                    <h1>{name}{symbol}</h1>
                </Link>
            ) 
})}
      </div>
    )
}



export default Dashboard;