import classes from "./Cards.module.scss";
import Card from "../../UI/Card";

const Cards = ({ cardData, setOptionHandler, selectedID }) => {
  return (
    <div className={classes.cards}>
      {cardData.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            setOptionHandler={setOptionHandler}
            selectedID={selectedID}
          >
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
  );
};

export default Cards;
