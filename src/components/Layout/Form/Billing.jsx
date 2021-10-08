import classes from "./Billing.module.scss";

const Billing = () => {
  return (
    <>
      <section className={classes.billing}>
        <h2 className={classes.heading}>Billing address</h2>

        <label className={classes.label} htmlFor="address">
          Street Address
        </label>
        <input className={classes.smallInput} type="text" id="address" />

        <label className={classes.label} htmlFor="number">
          Apt, Suite, Unit Number (Optional)
        </label>
        <input className={classes.smallInput} type="number" id="apt-number" />

        <label className={classes.label} htmlFor="apt-number">
          City/Town
        </label>
        <input className={classes.smallInput} type="number" id="number" />

        <label className={classes.label} htmlFor="country">
          Country
        </label>
        <input
          className={classes.smallInput}
          type="text"
          id="country"
          placeholder="Select a state or province"
        />

        <label className={classes.label} htmlFor="zip">
          Zip/Postal code
        </label>
        <input className={classes.smallInput} type="number" id="zip" />

        <label className={classes.label} htmlFor="email">
          Email receipt to
        </label>
        <input className={classes.smallInput} type="email" id="email" />
      </section>
    </>
  );
};

export default Billing;
