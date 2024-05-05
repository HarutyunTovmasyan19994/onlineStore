import React, { useEffect } from "react";
import { Button, Drawer, Typography, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_CART_ICREMENT,
  PRODUCT_CART_DECREMENT,
  PRODUCT_CART_REMOVE,
  PRODUCT_CART_TOTAL_PRICE,
  PRODUCT_CART_POPUP,
} from "../../../../redux/reducers/cartReducers/action";
import { OPEN_CART } from "../../../../redux/reducers/openCloseReducers/action";
import { DeleteFilled } from "@ant-design/icons";

const DrawerApp = ( ) => {
  const { cart, totalCount } = useSelector((state) => state.cart);
  const {openCart} = useSelector((state)=>state.open)
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


  const handleBtn =()=>{
    dispatch({type:PRODUCT_CART_POPUP,payload:true})
    dispatch({type:OPEN_CART,payload:false})

  }

  useEffect(()=>{
    cart.map(val => {
      if(val.count < 1){
        dispatch({ type: PRODUCT_CART_REMOVE, payload: val.id });
      }
    })
    if(cart.length === 0){
      dispatch({type:OPEN_CART,payload:false})
  }
  }, [cart])

  return (
    <Drawer
      title="Cart Products"
      onClose={()=>dispatch({type:OPEN_CART,payload:false})}
      open={openCart}
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
          <Typography.Paragraph>
            Total Price :
            {" "}
            {totalCount}
            {" "}
            $
          </Typography.Paragraph>

        <Button classNames="buyProducts" type="primary" onClick={handleBtn}>
          Buy
        </Button>

      </div>
    </Drawer>
  );
};

export default DrawerApp;
