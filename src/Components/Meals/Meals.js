import { Fragment } from "react";
import MealsSummary from "./MealsChildren/MealsSummary";
import AvailableMeals from "./MealsChildren/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
