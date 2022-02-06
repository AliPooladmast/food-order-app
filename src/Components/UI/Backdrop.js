import classes from "../../Styles/Modal.module.css";
import { connect } from "react-redux";
import { setIsCartShown } from "../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
});
const BackDrop = (props) => {
  const { onCloseCart } = props;

  return <div className={classes.backdrop} onClick={onCloseCart} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);
