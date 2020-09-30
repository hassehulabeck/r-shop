import React from "react";
import "./Productlist.css";
import Productinfo from "./Productinfo";

const Productlist = (props) => {
    console.log(props);
    return (
        <section className="productlist">
            {props.products.map((prod, index) => (
                <Productinfo
                    key={index}
                    product={prod}
                    username={props.username}
                    logintime={props.logintime}
                />
            ))}
        </section>
    );
};

export default Productlist;
