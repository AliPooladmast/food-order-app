import classes from "../../../Styles/MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome!</h2>
      <p>
        In here, you can find many delicious foods with our specific flavour.
        Our food would be ordered and delivered only by a couple of clicks. We
        are here to serve you the best and freshest food ever!
      </p>
    </section>
  );
};

export default MealsSummary;
