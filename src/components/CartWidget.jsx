import cart from "../assets/cart.svg";

const cartStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
};

const cartCountTextStyle = {
    position: "absolute",
    fontSize: 10,
    fontWeight: "bold",
    color: "rgb(250, 230, 203)",
    backgroundColor: "black",
    borderRadius: "50%",
    width: "12px",
    height: "12px",
    top: 10,
};

const CartWidget = () => {
    const count = "9";
    return (
        <span style={cartStyle}>
            <span style={cartCountTextStyle}>{count}</span>
            <img src={cart} height={20} />
        </span>
    );
};

export default CartWidget;
