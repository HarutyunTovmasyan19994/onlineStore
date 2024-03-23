import React from "react";
import {Carousel, Image} from "antd"
import "../../styles/hedaerLayoutStyle.css"

const AppCarousel = ({images}) => {

    return (
        <div>
            <Carousel className="imageCarousel">

                    {
                        images.map(img => (
                            <Image src={img} alt={img} className="imageCarousel"/>
                        ))
                    }
            </Carousel>
        </div>
    )
}
export default AppCarousel
