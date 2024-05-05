import React from "react";
import {Card, Layout, Typography, Button, Divider, Form, Input, InputNumber, DatePicker} from "antd"
import {useDispatch, useSelector} from "react-redux";
import {ShoppingCartOutlined,FilterOutlined} from "@ant-design/icons";
import AppCarousel from "./carusel";
import Modal from "../../popup/index"
import {Link, useHistory} from "react-router-dom";
import {
    PRODUCT_CART,
    PRODUCT_CART_DELIVERY,
    PRODUCT_CART_POPUP
} from "../../../redux/reducers/cartReducers/action"
import {OPEN_FILTER} from "../../../redux/reducers/openCloseReducers/action"
import {PRODUCT_CART_TOTAL_PRICE} from "../../../redux/reducers/cartReducers/action"
import FiliterDrawer from "../contentLoyount/filterDrawer"
import "../styles/hedaerLayoutStyle.css"

const AppContent = () => {
    const {product} = useSelector(state => state.app)
    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const history = useHistory()
    const [form] = Form.useForm();

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    const onFinish = (fieldsValue) => {

        const values = {
            ...fieldsValue,
            'dateTimePicker': fieldsValue['date-time-picker'].format('DD-MM-YYYY HH:mm:ss')
        }
        console.log(values, "val");
        dispatch({type: PRODUCT_CART_DELIVERY, payload: {cart, info: values}})
        history.push("/orderPage/order")
        dispatch({type: PRODUCT_CART_POPUP, payload: false})

    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const cartHandle = (id) => {
        product.find(items => {
            if (items.id === id) {
                dispatch({type: PRODUCT_CART, payload: {...items, count: 1}})
            }
        })
        dispatch({type: PRODUCT_CART_TOTAL_PRICE});
    }

    return (
        <div className="appCommon"> 
        <div className="flterMenu">
            <Button type="primary" onClick={()=>dispatch({type:OPEN_FILTER,payload:true})}>
                Filter <FilterOutlined style={{margin:3}}/>
            </Button>
        </div>
        <Layout.Content className="appContent">
            
            {
                product.map(products => (
                    <Card
                        key={products.id}
                        hoverable
                        className="cardProducts"
                        cover={
                            <AppCarousel images={products.images}/>
                        }
                    >
                        <Card.Meta title={products.title}/>
                        <Typography.Paragraph>
                            Price{' '}
                            {products.price}
                            {' '}
                            $
                        </Typography.Paragraph>
                        <Divider dashed/>
                        <div className="btnShopping">
                            <Link to={`/${products.id}`}>
                                <Button type="dashed" className="detailsBtn">
                                    See Details
                                </Button>
                            </Link>
                            <Button type="primary" onClick={() => cartHandle(products.id)}>
                                Buy
                                <ShoppingCartOutlined/>
                            </Button>
                        </div>

                    </Card>
                ))
            }
            <Modal>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    wrapperCol={{
                        span: 16,
                    }}
                    labelCol={{
                        span: 8,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    colon={false}
                    form={form}
                >
                    <Form.Item label="Name" name="name">
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Last Name" name="lastname">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Number Phone" name="numberPhone">
                        <InputNumber style={{width: "100%"}}/>
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="date-time-picker" label="Date " {...config} >
                        <DatePicker  format="YYYY-MM-DD " className="dateTime"/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </Layout.Content>
        <FiliterDrawer/>
        </div>
    )
}

export default AppContent
