import React from "react";
import AppLayout from "../components/layout/AppLayaount";
import {useSelector} from "react-redux";
import {Spin} from "antd";

const App = () => {
    const product = useSelector(state => state.app)
    if (product.loading) {
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

