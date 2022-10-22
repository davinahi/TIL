// import { useContext } from "react";
// import CartIcon from "../Cart/CartIcon";
// import classes from "./HeaderCartButton.module.css";
// import CartContext from "../../store/cart-context";

// const HeaderCartButton = (props) => {
//   const cartCtx = useContext(CartContext);
//   const { items } = cartCtx;

//   //카드 아이템의 총 개수. totalAmount를 써야하는 거 아닌가 했는데 totalAmount는 금액의 토탈임.
//   //그래서 개수인 amount를 합산해야함
//   const numberOfCartItems = items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

//   console.log(items);

//   return (
//     <button className={classes.button} onClick={props.onClick}>
//       <span className={classes.icon}>
//         <CartIcon className={classes.icon} />
//       </span>
//       <span>Your cart</span>
//       <span className={classes.badge}>5</span>
//     </button>
//   );
// };

// export default HeaderCartButton;

import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
