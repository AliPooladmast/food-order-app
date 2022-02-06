import { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../Components/Layout/Header";
import Meals from "../Components/Meals/Meals";
import Cart from "../Components/Cart/Cart";

const mapStateToProps = (state) => ({
  IsCartShown: state.cartDisplay.IsCartShown,
});

const mapDispatchToProps = (dispatch) => ({});

function App(props) {
  const { IsCartShown } = props;
  return (
    <Fragment>
      {IsCartShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
