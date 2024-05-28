import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {ArrowLeftOutlined,ShoppingOutlined} from "@ant-design/icons";
import {ORDER_PRUDUCTS} from "../redux/reducers/orderReducers/action"
import {PRODUCT_CART_DEFUALT_STATE} from "../redux/reducers/cartReducers/action"
import {Typography, Button} from "antd"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../components/layout/styles/hedaerLayoutStyle.css"



const OrderPage = () => {
    const {delivery, totalCount} = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const history = useHistory()
  
    const deliveryAmount = 100
    
    const buyHandle =()=>{
        dispatch({type:ORDER_PRUDUCTS,payload:delivery.cart})
        dispatch({type:PRODUCT_CART_DEFUALT_STATE})
        history.push('/orderPage/myOrder')
    }
    return (
        <>
       <div className="headerDetails">
           <div className="btnBox">
               <Button type="link" onClick={()=>history.push("/")}>
                   <ArrowLeftOutlined/>
                   Back
               </Button>
           </div>
           <div className="DetailsProduct">
               <Typography.Title level={3}>Order</Typography.Title>
           </div>

       </div>
        <div className="commonOrder">

            <div className="productOrder">
                {
                    delivery.cart.map(items => (
                        <div className="productApp">
                            <div className="divLeft">
                                <img src={items.images[0]} style={{width: 100}}/>
                                <div className="infoTitle">
                                    <p className="leftTitle">{items.title}</p>
                                    <p className="leftTitle">{items.price}{' '} $</p>
                                </div>
                            </div>

                            <div className="divRight1">

                                    <Typography.Paragraph className="countCart">
                                        {items.count}
                                    </Typography.Paragraph>

                                <div className="divRight">
                                    <Typography.Paragraph>
                                        {totalCount}{" "}$
                                    </Typography.Paragraph>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="productInfo">
                <div className="deliveryInfo">
                    <div className="title">
                        <Typography.Title level={5}>Delivery Information</Typography.Title>
                    </div>
                    <div className="infoPerson">
                        <div>
                            <p>Name</p>
                            <p>{delivery.info.name}</p>
                        </div>
                        <div>
                            <p>LastName</p>
                            <p>{delivery.info.lastname}</p>
                        </div>
                        <div>
                            <p>Date</p>
                            <p>{delivery.info.dateTimePicker}</p>
                        </div>
                        <div>
                            <p>Phone Number</p>
                            <p>{delivery.info.numberPhone}</p>
                        </div>
                        <div>
                            <p>Address</p>
                            <p>{delivery.info.address}</p>
                        </div>
                    </div>
                </div>
                <div className='payMoney'>
                    <div className="title">
                        <Typography.Title level={5}>
                            Shipping Amount
                        </Typography.Title>
                    </div>
                    <div className="infoPerson">
                        <div>
                            <p>
                                Shopping Amaount
                            </p>
                            <p>
                                {totalCount}{" "}$
                            </p>
                        </div>
                        <div>
                            <p> Delivary </p>
                            <p>{deliveryAmount}{' '}$</p>
                        </div>
                        <div>
                            <p> Total Amount</p>
                            <p>{totalCount + deliveryAmount}{" "}$</p>
                        </div>
                    </div>
                    <div classNane="btnBuy">
                        <Button className="btnClick" type="primary" onClick={buyHandle}>
                            Buy
                            <ShoppingOutlined />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderPage
