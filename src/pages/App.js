import AppLayout from "../components/layout/AppLayaount";
import {useSelector} from "react-redux";
import {Spin} from "antd";
import React from "react";

function App() {
    const product = useSelector(state => state.app)
    if (product.loading){
        return (
            <Spin size="large" fullscreen/>
        )
    }
  return (
    <div>
        <AppLayout/>
    </div>
  )
}

export default App;

//https://fakestoreapi.com/products
//https://api.escuelajs.co/api/v1/products es mek ara
//https://dummyapi.online/api/products
