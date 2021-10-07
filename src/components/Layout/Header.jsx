import classes from "./Header.module.css";
import Card from "../UI/Card";

const Header = ({ cardData }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.heading}>
          Get your rewards faster. Buy, Gift or Transfer Miles today!
        </h1>
        <div className={classes.controls}>
          <div className={classes.filter}>
            <p>Filter by:</p>
            <input type="checkbox" value="buy" name="buy" id="buy" />
            <label for="buy">buy</label>

            <input type="checkbox" value="gift" name="gift" id="gift" />
            <label for="gift">gift</label>

            <input
              type="checkbox"
              value="transfer"
              name="transfer"
              id="transfer"
            />
            <label for="transfer">transfer</label>
          </div>

          <div className={classes.sort}>
            <p>Sort by price:</p>
            <input type="checkbox" value="low" name="low" id="low" />
            <label for="low">low-high</label>
            <input type="checkbox" value="high" name="high" id="high" />
            <label for="high">high-low</label>
          </div>
        </div>

        <div className={classes.cards}>
          {cardData.map((data) => {
            return (
              <Card key={data.id}>
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
