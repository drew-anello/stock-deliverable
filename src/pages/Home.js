import React from "react";
const Home = (props) => {
    return(
        <h1>Home Page</h1>
    )
    const [stock, setStock] = React.useState(null);
s
    React.useEffect(() => {
        getStock();
      }, []);
}
const loaded = () => {
    return (
      <div>
        <h1>
          {stock.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };



export default Home