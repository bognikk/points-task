import classes from "./Card.module.scss";

const Card = ({ children, setOptionHandler, id, selectedID }) => {
  const cardClasses = `${
    selectedID === id ? classes.selectedCard : classes.card
  }`;

  return (
    <div onClick={() => setOptionHandler(id)} className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
