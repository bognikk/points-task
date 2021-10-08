import classes from "./Card.module.scss";

const Card = ({ children, setOptionHandler, id }) => {
  return (
    <div onClick={() => setOptionHandler(id)} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
