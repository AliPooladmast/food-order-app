import classes from "../../Styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "../Cart/CartItem";
import { connect } from "react-redux";
import { setIsCartShown } from "../../Containers/actions";
import { setAddCart } from "../../Containers/actions";
import { setRemoveCart } from "../../Containers/actions";

const mapStateToProps = (state) => ({
  items: state.cartItemChange.items,
  totalPrice: state.cartItemChange.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
  onAddCart: (item) => dispatch(setAddCart(item)),
  onRemoveCart: (item) => dispatch(setRemoveCart(item)),
});

const Cart = (props) => {
  const { onCloseCart, items, totalPrice, onAddCart, onRemoveCart } = props;

  const onAddToCart = (event) => {
    const idTag = event.target.id;
    onAddCart({ idTag, amount: 1 });
  };

  const onRemoveFromCart = (event) => {
    const idTag = event.target.id;
    onRemoveCart({ idTag, amount: -1 });
  };

  const CartItems = items.map((item) => (
    <CartItem
      {...item}
      key={item.id}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  ));
  const totalPriceNumber = `$${totalPrice.toFixed(2)}`;

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{CartItems}</ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPriceNumber}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
