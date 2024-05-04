import React, {useState} from "react";
import {Layout, Typography, Badge, Dropdown, Button, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {DownOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import {PRODUCT_CATEGORY_CLOTHES} from "../../../redux/reducers/productCategory/action";
import {PRODUCT_SENT} from "../../../redux/reducers/productReducers/action";
import {items} from "./items";
import DrawerApp from "./drawer";
import "../styles/hedaerLayoutStyle.css";

const HeaderLayout = () => {
    const [open, setOpen] = useState(false);
    const {cart} = useSelector(state => state.cart)
    const history = useHistory()

    const dispatch = useDispatch();

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
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Layout.Header className="headerStyle">
                <Typography.Title className="titleStyle">Online Store</Typography.Title>
                <div className="paragraph">
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
                    <Typography.Paragraph className="aboutMeStyle" onClick={()=>history.push("orderPage/myOrder")}>
                        My Order
                    </Typography.Paragraph>
                    <Typography.Paragraph className="aboutMeStyle">
                        About Me
                    </Typography.Paragraph>
                    <Button type="text" className="shoppingCartBox" onClick={showDrawer}
                            disabled={!cart.length}>
                        <Badge count={cart.length === 0 ? 0 : cart.length} size="small">
                            <ShoppingCartOutlined className="shoppingCart"/>
                        </Badge>
                    </Button>
                </div>
            </Layout.Header>
            <DrawerApp open={open} onClose={onClose}/>
        </>
    );
};

export default HeaderLayout;