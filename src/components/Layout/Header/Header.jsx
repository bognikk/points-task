import Filter from "./Filter";
import Sort from "./Sort";
import Cards from "./Cards";
import classes from "./Header.module.scss";

const Header = ({ cardData, setOptionHandler, filterData, selectedID }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.heading}>
          Get your rewards faster. Buy, Gift or Transfer Miles today!
        </h1>
        <div className={classes.controls}>
          <Filter filterData={filterData} />
          <Sort />
        </div>
        <Cards
          cardData={cardData}
          setOptionHandler={setOptionHandler}
          selectedID={selectedID}
        />
      </header>
    </>
  );
};

export default Header;
