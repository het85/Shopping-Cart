function Header(props){
    return (
        <div className="header">
            <h1>Shopping Cart</h1>
            <p>{props.products.length} Items in a cart</p>
        </div>
    )
}

export default Header