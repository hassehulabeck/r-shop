import React, { useState, useEffect } from "react";
import "./App.css";
import Productlist from "./Productlist";

function App() {
    const [products, setProducts] = useState();
    const [loaded, setLoaded] = useState(false);
    const [username, setUsername] = useState("Rune");
    const [logintime, setLogintime] = useState(new Date().getTime());

    useEffect(() => {
        fetch("https://www.hulabeck.se/html/temp/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loaded) {
        return (
            <div className="App">
                <h1>Shop</h1>
                <Productlist
                    products={products}
                    username={username}
                    logintime={logintime}
                />
            </div>
        );
    } else {
        return "<h1>Loading...</h1>";
    }
}

export default App;
