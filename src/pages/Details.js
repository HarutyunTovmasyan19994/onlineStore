import React from "react";
import {useSelector} from "react-redux";
import AppCarousel from "../components/layout/contentLoyount/carusel"
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Spin, Button, Typography} from "antd";
import "../components/layout/styles/hedaerLayoutStyle.css"
import {Link} from "react-router-dom";

const Details = () => {
    const details = useSelector(state => state.details)
    if (details.loading) {
        return (
            <Spin fullscreen/>
        )
    }
    return (
        <div>
            <div className="headerDetails">
                <div className="btnBox">
                    <Link to="/">
                        <Button type="link">
                            <ArrowLeftOutlined/>
                            Back
                        </Button>
                    </Link>
                </div>
                <div className="DetailsProduct">
                    <Typography.Title level={3} className="detailProduct">Detail Product</Typography.Title>
                </div>

            </div>

            <div className="detailsCommon">
                <div className="imgBox">
                    {
                        <AppCarousel images={details.details.images}/>
                    }
                </div>
                <div className="infoBox">
                    <div className="titleBox">
                        <Typography.Title level={4}>
                            {details.details.title}
                        </Typography.Title>
                        <Typography.Paragraph className="description">
                            Description:{' '}
                            {details.details.description}
                        </Typography.Paragraph>
                        <div className="categoryBox">
                            <Typography.Paragraph>
                                Category:{' '}
                                {details.details.category.name}
                            </Typography.Paragraph>
                        </div>
                        <div className="categoryBox">
                            <Typography.Paragraph>
                                Price:{' '}
                                {details.details.price}
                                {' '}
                                $
                            </Typography.Paragraph>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details
