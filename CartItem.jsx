function CartItem(props) {
    const { products, setProducts } = props;

    const handleDelete = () => {
        fetch(`http://localhost:5000/api/products/${props.id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                let updatedProducts = products.filter(product => product.id !== props.id);
                setProducts(updatedProducts);
            });
    };
    return (
        <tr>
            <td><img src="https://placehold.co/150" alt="Placehodler 1" /></td>
            <td><h3>{props.name}</h3><p>{props.brand} </p></td>
            <td>{props.price}</td>
            <td><input type="number" defaultValue={props.qty}></input></td>
            <td>
                <button className="fa-solid fa-arrow-rotate-right"></button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={handleDelete} className="fa-solid fa-trash-can"></button>
            </td>
        </tr>
    )
}

export default CartItem