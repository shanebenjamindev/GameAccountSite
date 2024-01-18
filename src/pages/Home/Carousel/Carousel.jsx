import React from 'react'
import { Col, Row } from 'antd'
import carousel1 from '../../../assets/images/Nikki.jpg'
import Slider from "react-slick";
import ItemComponent from '../../../components/ItemComponent/ItemComponent';
import { WrapperCarouselItem } from './style';
import data from '../../../data.json'

export default function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const renderItemCarousel = () => {
        return data.map((item, index) => {
            return <ItemComponent key={index} item={item} />
        })
    }

    return (
        <section className='container' >
            <div className='d-md-flex justify-content-center align-items-center'>
                <Col md={12}>
                    <WrapperCarouselItem>
                        {renderItemCarousel()}
                    </WrapperCarouselItem>
                </Col>
                <Col md={12}>
                    <Slider {...settings}>
                        <div>
                            <img src={carousel1} />
                        </div>
                        <div>
                            <h3>hinh 2</h3>
                        </div>
                        <div>
                            <h3>hinh 3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </Col>
            </div>
        </section >
    )
}
