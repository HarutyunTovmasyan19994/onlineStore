import React from "react";
import {Card, Layout,Typography,Button,Divider,Spin,Image } from "antd"
import {useDispatch, useSelector} from "react-redux";
import {ShoppingCartOutlined} from "@ant-design/icons";
import AppCarousel from "./carusel";
import {Link} from "react-router-dom";
import {PRODUCT_CART,PRODUCT_CART_DATA} from "../../../redux/reducers/cartReducers/action"
import{PRODUCT_CART_TOTAL_PRICE} from "../../../redux/reducers/cartReducers/action"
import "../styles/hedaerLayoutStyle.css"

const AppContent = () => {
    const {product} = useSelector(state => state.app)
    const dispatch = useDispatch()

    const cartHandle = (id)=>{
        console.log(id,"iddddd");
        product.find(items=>{
            if(items.id ===id){
                dispatch({type:PRODUCT_CART,payload:{...items,count:1}})
            }
        })
        dispatch({ type: PRODUCT_CART_TOTAL_PRICE });
    }

    return (
        <Layout.Content  className="appContent">
            {
                product.map(products=>(
                    <Card
                        key={products.id}
                        hoverable
                        className="cardProducts"
                        cover={
                            <AppCarousel images={products.images}/>
                    }
                    >
                        <Card.Meta title={products.title} />
                        <Typography.Paragraph>
                            Price{' '}
                            {products.price}
                            {' '}
                            $
                        </Typography.Paragraph>
                        <Divider dashed />
                        <div className="btnShopping">
                            <Link to = {`/${products.id}`}>
                                <Button type="dashed" >
                                    See Details
                                </Button>
                            </Link>
                            <Button type="primary" onClick={()=>cartHandle(products.id)} >
                                Buy
                                <ShoppingCartOutlined />
                            </Button>
                        </div>

                    </Card>
                ))
            }

        </Layout.Content>
    )
}

export default AppContent
