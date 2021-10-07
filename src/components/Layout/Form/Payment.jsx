import classes from "./Payment.module.css";

const Payment = ({ selectedOption }) => {
  return (
    <>
      <section className={classes.payment}>
        <div className={classes.creditCard}>
          <h2>Payment details</h2>
          <p>
            We accept all major credit cards. Please ensure that you enter your
            details exactly as they appear on your credit card statement. All
            fields are required unless is indicated.
          </p>

          <label className={classes.label} htmlFor="name">
            Cardholder name
          </label>
          <input className={classes.input} type="text" id="name" />
          <label className={classes.label} htmlFor="number">
            Card number
          </label>
          <input className={classes.input} type="text" id="number" />

          <label className={classes.label} htmlFor="number">
            Expiration date
          </label>
          <input
            className={classes.smallInput}
            type="text"
            id="number"
            placeholder="MMYY"
          />

          <label className={classes.label} htmlFor="number">
            CVC
          </label>
          <input className={classes.smallInput} type="text" id="number" />
        </div>
        <div className={classes.summary}>
          <h2>Order summary</h2>
          <p>
            Total miles <span>2000</span>
          </p>
          <p>
            GST/HST <span>$20.00</span>
          </p>
          <p>
            Total cost <span>$197.00</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Payment;
