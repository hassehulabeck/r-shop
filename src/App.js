import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("https://www.hulabeck.se/html/temp/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return <div className="App">Shop</div>;
}

export default App;
