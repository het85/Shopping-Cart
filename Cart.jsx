import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';

function Cart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    let total = products.reduce(function (acc, product) {
        return acc + product.price * product.quantity;
    }, 0);

    return (
        <div className="cart">
            <Header products={products} />
            <hr />
            <ProductList products={products} setProducts={setProducts} />
            <hr />
            <Footer total={total} />
        </div>
    );
}

export default Cart;
