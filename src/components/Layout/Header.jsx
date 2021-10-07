import classes from "./Header.module.css";
import Card from "../UI/Card";

const Header = ({ cardData, setOptionHandler }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.heading}>
          Get your rewards faster. Buy, Gift or Transfer Miles today!
        </h1>
        <div className={classes.controls}>
          <div className={classes.filter}>
            <p>Filter by:</p>
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
              value="transfer"
              name="transfer"
              id="transfer"
            />
            <label className={classes.label} htmlFor="transfer">
              transfer
            </label>
          </div>

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
        </div>

        <div className={classes.cards}>
          {cardData.map((data) => {
            return (
              <Card key={data.id} onClick={() => setOptionHandler(data.id)}>
                <p>
                  {data.type} {data.amount} miles
                </p>
                <p>
                  <span>${data.cost.toFixed(2)}</span>
                </p>
              </Card>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
