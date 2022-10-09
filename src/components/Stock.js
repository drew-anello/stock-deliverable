import React from "react";
import stocks from "./stock-data";

function Stock (props) {
    const stock = props.stocks.filter( d => d.symbol === props.match.params.symbol)[0]
    return(
        <div className="stocks">
            <h1>I should be showing the stock data</h1>
            <h2>{stock.name}</h2>
            {/* <h2>{stock.symbol}</h2> */}
            <h2>{stock.lastPrice}</h2>
        </div>
    )
}
export default Stock;