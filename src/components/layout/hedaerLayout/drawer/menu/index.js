import React from "react";
import { Button, Drawer, Typography, Dropdown,Space,Badge } from "antd";
import {DownOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {OPEN_MENU} from "../../../../../redux/reducers/openCloseReducers/action"
import {PRODUCT_SENT} from "../../../../../redux/reducers/productReducers/action";
import {PRODUCT_CATEGORY_CLOTHES} from "../../../../../redux/reducers/productCategory/action";
import { OPEN_CART } from "../../../../../redux/reducers/openCloseReducers/action";
import {items} from "../../items";




const MenuDrawer =()=>{
    const {openMenu} = useSelector(state=>state.open)
    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleMenuClick = (e) => {
        if (e.key === "all") {
            dispatch({type: PRODUCT_SENT});
        } else if (e.key === "Clothes") {
            dispatch({type: PRODUCT_SENT});
            setTimeout(() => {
                dispatch({type: PRODUCT_CATEGORY_CLOTHES, payload: 1});
            }, 250);
        } else if (e.key === "Electronics") {
            dispatch({type: PRODUCT_SENT});
            setTimeout(() => {
                dispatch({type: PRODUCT_CATEGORY_CLOTHES, payload: 2});
            }, 250);
        } else if (e.key === "Furniture") {
            dispatch({type: PRODUCT_SENT});
            setTimeout(() => {
                dispatch({type: PRODUCT_CATEGORY_CLOTHES, payload: 3});
            }, 250);
        } else if (e.key === "Shoes") {
            dispatch({type: PRODUCT_SENT});
            setTimeout(() => {
                dispatch({type: PRODUCT_CATEGORY_CLOTHES, payload: 4});
            }, 250);
        } else if (e.key === "Miscellaneous") {
            dispatch({type: PRODUCT_SENT});
            setTimeout(() => {
                dispatch({type: PRODUCT_CATEGORY_CLOTHES, payload: 5});
            }, 250);
        }
        dispatch({type:OPEN_MENU,payload:false})
    };
      const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    const showDrawer = () => {
        dispatch({type:OPEN_CART,payload:true})
        dispatch({type:OPEN_MENU,payload:false})
    };
    const myOrderHandle =()=>{
        history.push("orderPage/myOrder")
        dispatch({type:OPEN_MENU,payload:false})
    }
    return(
        <Drawer
        title="Menu"
        onClose={()=>dispatch({type:OPEN_MENU,payload:false})}
        open={openMenu}
        >
             <div className="paragraph2">
                    <Typography.Paragraph>
                        <Dropdown menu={menuProps}>
                            <Button className="dropDownStyle">
                                <Space>
                                    Category
                                    <DownOutlined/>
                                </Space>
                            </Button>
                        </Dropdown>
                    </Typography.Paragraph>
                    <Typography.Paragraph className="aboutMeStyle" onClick={myOrderHandle}>
                        My Order
                    </Typography.Paragraph>
                    <Button type="text" className="shoppingCartBox" onClick={showDrawer}
                            disabled={!cart.length}>
                        <Badge count={cart.length === 0 ? 0 : cart.length} size="small">
                            <ShoppingCartOutlined className="shoppingCart"/>
                        </Badge>
                    </Button>
                </div>
        </Drawer>
    )
}

export default MenuDrawer