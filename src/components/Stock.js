import React from "react";
import Stocks from "./stock-data";

function Stock (props) {
    // const stock = props.stocks.filter( d => d.symbol === props.match.params.symbol)[0]
    return(
        <div className="stocks">
            <h2>{Stocks.name}</h2>
            {/* <h2>{stock.symbol}</h2> */}
            <h2>{Stocks.lastPrice}</h2>
        </div>
    )
}
export default Stock;