import classes from "./Card.module.css";

const Card = ({ children, setOptionHandler, id }) => {
  return (
    <div onClick={() => setOptionHandler(id)} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
