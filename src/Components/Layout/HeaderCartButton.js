import { connect } from "react-redux";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { setIsCartShown } from "../../actions";

const mapStateToProps = (state) => ({
  IsCartShown: state.IsCartShown,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenCart: () => dispatch(setIsCartShown(true)),
  onCloseCart: () => dispatch(setIsCartShown(false)),
});

const HeaderCartButton = (props) => {
  const { onOpenCart } = props;

  return (
    <button className={classes.button} onClick={onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCartButton);
