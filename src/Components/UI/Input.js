import classes from "../../Styles/Input.module.css";

const Input = (props) => {
  const { input, label } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input type="text" {...input} />
    </div>
  );
};

export default Input;
