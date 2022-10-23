import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Farmer Jackson's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/12-finished/src/assets/meals.jpg?raw=true"
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
};

export default Header;
