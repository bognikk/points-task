import Payment from "./Payment";

import classes from "./Form.module.css";

const Form = ({ selectedOption }) => {
  return (
    <div className={classes.form}>
      <Payment selectedOption={selectedOption} />
    </div>
  );
};

export default Form;
