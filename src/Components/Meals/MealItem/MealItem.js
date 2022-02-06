import classes from "../../../Styles/MealItem.module.css";
import MealItemFrom from "./MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price } = props;
  const priceRounded = price.toFixed(2);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceRounded}</div>
      </div>
      <div>
        <MealItemFrom id={id} />
      </div>
    </li>
  );
};

export default MealItem;
