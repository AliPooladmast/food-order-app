import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "../../Styles/Header.module.css";
import mealsImage1x from "../../Assets/Images/meals@1x.jpg";
import mealsImage2x from "../../Assets/Images/meals@2x.jpg";
import mealsImageWeb1x from "../../Assets/Images/meals@1x.webp";
import mealsImageWeb2x from "../../Assets/Images/meals@2x.webp";

const Header = (props) => {
  const mealsImageWeb = `${mealsImageWeb1x} 1x, ${mealsImageWeb2x} 2x`;
  const mealsImage = `${mealsImage1x} 1x, ${mealsImage2x} 2x`;

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <picture>
          <source type="image/webp" srcset={mealsImageWeb} />
          <source type="image/jpg" srcset={mealsImage} />
          <img src={mealsImage1x} alt="A table full of delicious food!" />
        </picture>
      </div>
    </Fragment>
  );
};

export default Header;
