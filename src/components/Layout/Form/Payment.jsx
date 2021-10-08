import classes from "./Payment.module.scss";

const Payment = ({ selectedOption }) => {
  const amount = !selectedOption.amount ? 0 : selectedOption.amount;
  const cost = !selectedOption.cost ? 0 : selectedOption.cost + 20;

  return (
    <>
      <section className={classes.payment}>
        <div className={classes.creditCard}>
          <h2 className={classes.heading}>Payment details</h2>
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
          <input className={classes.input} type="number" id="number" />

          <label className={classes.label} htmlFor="number">
            Expiration date
          </label>
          <input
            className={classes.smallInput}
            type="number"
            id="number"
            placeholder="MMYY"
          />

          <label className={classes.label} htmlFor="number">
            CVC
          </label>
          <input className={classes.smallInput} type="number" id="number" />
        </div>
        <div className={classes.summary}>
          <h2>Order summary</h2>
          <p>
            Total miles <span>{amount}</span>
          </p>
          <p>
            GST/HST <span>$20.00</span>
          </p>
          <p>
            Total cost <span>{cost}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Payment;
