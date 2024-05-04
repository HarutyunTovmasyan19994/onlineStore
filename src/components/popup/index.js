import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PRODUCT_CART_POPUP } from "../../redux/reducers/cartReducers/action";
import "../layout/styles/hedaerLayoutStyle.css";

const Modal = ({ children }) => {
  const { popup } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  return (
    <div
      className={popup ? "modal active" : "modal"}
      onClick={() => dispatch({ type: PRODUCT_CART_POPUP, payload: false })}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
      {children}
      </div>
    </div>
  );
};

export default Modal;

