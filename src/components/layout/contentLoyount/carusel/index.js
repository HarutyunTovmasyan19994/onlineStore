import React from "react";
import {Carousel, Image} from "antd"
import IMG from "../../../../assets/img/fake image.png"
import "../../styles/hedaerLayoutStyle.css"

const AppCarousel = ({images}) => {

    return (
        <div>
            <Carousel className="imageCarousel">
                    {
                        images.map(img => (
                            <Image src={images.length > 2 ? img : IMG} alt={img} className="imageCarousel" key={img}/>
                        ))
                    }
            </Carousel>
        </div>
    )
}
export default AppCarousel
