import React from "react";
import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/Cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // 총합액 소수점 처리, item의 유무 확인
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  //cartItem 수량 조절(1보다 작으면 없애기까지)
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          price={item.price}
          totalAmount={totalAmount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$26(임시)</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
