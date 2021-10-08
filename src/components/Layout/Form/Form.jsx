import Payment from "./Payment";
import Billing from "./Billing";
import classes from "./Form.module.scss";

const Form = ({ selectedOption }) => {
  return (
    <div className={classes.form}>
      <Payment selectedOption={selectedOption} />
      <Billing />
    </div>
  );
};

export default Form;
