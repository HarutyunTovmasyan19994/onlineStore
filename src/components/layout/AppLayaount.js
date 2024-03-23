import React from "react";
import {Layout} from "antd";
import HeaderLayout from "./hedaerLayout/HeaderLayout";
import AppSlider from "./sliderLayout";
import AppContent from "./contentLoyount";


const AppLayout = () => {
    return (
        <Layout >
            <HeaderLayout/>
            <Layout hasSider>
                <AppSlider/>
                <AppContent/>
            </Layout>
        </Layout>
    )
}

export default AppLayout
