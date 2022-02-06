import classes from "../../../Styles/MealItemForm.module.css";
import Input from "../../UI/Input";
import { connect } from "react-redux";
import { setIsCartShown } from "../../../Containers/actions";
import { setAddCart } from "../../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddCart: (item) => dispatch(setAddCart(item)),
});

const MealItemFrom = (props) => {
  const { id, onAddCart } = props;
  const onAddToCart = (event) => {
    event.preventDefault();
    const amount = +event.target[0].value;
    const idTag = event.target[0].id;
    onAddCart({ idTag, amount });
  };

  return (
    <form className={classes.form} action="" onSubmit={onAddToCart}>
      <Input
        label="Amount"
        input={{
          id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MealItemFrom);
