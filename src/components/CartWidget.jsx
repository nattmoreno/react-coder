import cart from "../assets/cart.svg";

const cartStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
};

const cartCountTextStyle = {
    position: "absolute",
    fontSize: 8,
    fontWeight: "bold",
    top: 2,
};

const CartWidget = () => {
    const count = "9+";
    return (
        <span style={cartStyle}>
            <span style={cartCountTextStyle}>{count}</span>
            <img src={cart} height={30} />
        </span>
    );
};

export default CartWidget;
