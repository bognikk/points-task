import classes from "./Controls.module.scss";

const Sort = () => {
  return (
    <div className={classes.sort}>
      <p>Sort by price:</p>
      <input
        className={classes.input}
        type="checkbox"
        value="low"
        name="low"
        id="low"
      />
      <label className={classes.label} htmlFor="low">
        low-high
      </label>
      <input
        className={classes.input}
        type="checkbox"
        value="high"
        name="high"
        id="high"
      />
      <label className={classes.label} htmlFor="high">
        high-low
      </label>
    </div>
  );
};

export default Sort;
