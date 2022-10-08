import React from "react";
import stocks from "../stock-data";
import Stocks from "../stock-data";


function Stock (props) {
    // const Stock = props.stocks.filter( d => d.symbol === props.match.params.symbol)[0]
    return(
        <div className="stocks">
            <h2>{Stock.name}</h2>
            <h2>{Stock.symbol}</h2>
            <h2>{Stock.lastPrice}</h2>
        </div>
    )
}
export default Stock;