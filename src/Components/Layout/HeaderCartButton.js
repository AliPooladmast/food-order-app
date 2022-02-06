import { useEffect } from "react";
import { connect } from "react-redux";
import classes from "../../Styles/HeaderCartButton.module.css";
import CartIcon from "../../Assets/CartIcon";
import { setIsCartShown } from "../../Containers/actions";
import { setIsButtonHighlighted } from "../../Containers/actions";

const mapStateToProps = (state) => ({
  IsButtonHighlighted: state.buttonHighlight.IsButtonHighlighted,
  items: state.cartItemChange.items,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenCart: () => dispatch(setIsCartShown(true)),
  onButtonHighlight: (event) => dispatch(setIsButtonHighlighted(event)),
});

const HeaderCartButton = (props) => {
  const { onOpenCart, items, IsButtonHighlighted, onButtonHighlight } = props;

  const cartItemsNumber = items.reduce(
    (CurrentValue, item) => CurrentValue + item.amount,
    0
  );

  const buttonClasses = `${classes.button} ${
    IsButtonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    onButtonHighlight(true);
    const timeout = setTimeout(() => {
      onButtonHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>your cart</span>
      <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCartButton);
