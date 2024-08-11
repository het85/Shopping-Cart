import { useEffect, useState } from "react";

function Footer(props) {
    // console.log(props)   
    return (
        <div className="footer">
            <h3>Sub Total:</h3>
            <h1>{props.total}</h1>

            <div className="row">
                <a href="">Continue Shopping</a>
                <button>Check Out</button>
            </div>
        </div>
    )
}

export default Footer