import classes from "./Modal.module.css";
import { connect } from "react-redux";
import { setIsCartShown } from "../../actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
});

const BackDrop = (props) => {
  const { onCloseCart } = props;

  return <div className={classes.backdrop} onClick={onCloseCart} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);
