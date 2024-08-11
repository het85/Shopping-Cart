import CartItem from "./CartItem"

function ProductList(props) {

// console.log('propsList', props)

    return (
        <table cellPadding={5} cellSpacing={2} className="tableContent">
            <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Qty</th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                {props.products.map((function (product) {
                    return <CartItem
                        key={product.id}
                        product={product}
                        setProducts={props.setProducts}
                        products={props.products}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        qty={product.quantity}
                        brand={product.brand}

                    />
                }))}

            </tbody>


        </table>
    )
}

export default ProductList