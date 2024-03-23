import React, { useEffect } from "react";
import { Button, Drawer, Typography, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_CART_ICREMENT,
  PRODUCT_CART_DECREMENT,
  PRODUCT_CART_REMOVE,
  PRODUCT_CART_TOTAL_PRICE,
} from "../../../../redux/reducers/cartReducers/action";
import { DeleteFilled } from "@ant-design/icons";

const DrawerApp = ({ onClose, open }) => {
  const { cart, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const incrementHandle = (id, text) => {
    if (text === "increment") {
      dispatch({ type: PRODUCT_CART_ICREMENT, payload: id });
      dispatch({ type: PRODUCT_CART_TOTAL_PRICE });
    }
    if (text === "decrement") {
      dispatch({ type: PRODUCT_CART_DECREMENT, payload: id });
      dispatch({ type: PRODUCT_CART_TOTAL_PRICE });
    }
  };
  const removeHandle = (id) => {
    dispatch({ type: PRODUCT_CART_REMOVE, payload: id });
    dispatch({ type: PRODUCT_CART_TOTAL_PRICE });
  };

  if(cart.length === 0){
    onClose()
  }
  console.log(totalCount, "cart");
  return (
    <Drawer
      title="Cart Products"
      onClose={onClose}
      open={open}
      className="drawerApp"
    >
      {cart.map((items) => (
        <div className="cartCommon">
          <div className="cartApp">
            <div className="imgDiv">
              <img src={items.images[0]} />
            </div>
            <div className="paragraphDiv">
              <Typography.Paragraph>{items.title}</Typography.Paragraph>
              <div className="incrementDecrement">
                <Button
                  className="incrementBtn"
                  onClick={() => incrementHandle(items.id, "increment")}
                >
                  +
                </Button>
                <Typography.Paragraph className="countCart">
                  {items.count}
                </Typography.Paragraph>
                <Button
                  className="decrementBtn"
                  onClick={() => incrementHandle(items.id, "decrement")}
                >
                  -
                </Button>
                <Typography.Paragraph className="priceType">
                  {items.price * items.count} $
                </Typography.Paragraph>
              </div>
            </div>
          </div>
          <Divider />
          <Button
            className="removeBtn"
            type="primary"
            danger
            onClick={() => removeHandle(items.id)}
          >
            <DeleteFilled />
          </Button>
        </div>
      ))}
      <div className="buyCart">
        <div className="infoCart">
          <div>
            <Typography.Paragraph>
              Subtatal 
            </Typography.Paragraph>
            <Typography.Paragraph>
             Delivery fee 
            </Typography.Paragraph>
            <Typography.Paragraph>
              Total 
            </Typography.Paragraph>
          </div>
          <div>
            <Typography.Paragraph>
             {totalCount}
            </Typography.Paragraph>
            <Typography.Paragraph>
              250 $
            </Typography.Paragraph>
            <Typography.Paragraph>
              {totalCount + 250 }
            </Typography.Paragraph>
          </div>
        </div>
        <Button classNames="buyProducts" type="primary" onClick={onClose}>
          Buy
        </Button>
      </div>
    </Drawer>
  );
};

export default DrawerApp;
