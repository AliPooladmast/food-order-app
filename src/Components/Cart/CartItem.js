import classes from "../../Styles/CartItem.module.css";

const CartItem = (props) => {
  const { name, amount, id, onAddToCart, onRemoveFromCart } = props;
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveFromCart} id={id}>
          −
        </button>
        <button onClick={onAddToCart} id={id}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
