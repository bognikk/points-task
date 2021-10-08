import classes from "./Controls.module.scss";

const Filter = () => {
  return (
    <div className={classes.filter}>
      <p>Filter by:</p>

      <input
        className={classes.input}
        type="checkbox"
        value="gift"
        name="gift"
        id="gift"
      />
      <label className={classes.label} htmlFor="gift">
        gift
      </label>

      <input
        className={classes.input}
        type="checkbox"
        value="buy"
        name="buy"
        id="buy"
      />
      <label className={classes.label} htmlFor="buy">
        buy
      </label>

      <input
        className={classes.input}
        type="checkbox"
        value="transfer"
        name="transfer"
        id="transfer"
      />
      <label className={classes.label} htmlFor="transfer">
        transfer
      </label>
    </div>
  );
};

export default Filter;
