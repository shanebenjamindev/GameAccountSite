import React from 'react';
import { Col } from 'antd';
import Slider from 'react-slick';
import ItemComponent from '../../../components/ItemComponent/ItemComponent';
import { WrapperCarouselItem } from './style';
import data from '../../../data.json';

export default function Carousel() {
    const carouselArr = [
        {
            "name": "carousel1",
            "imageUrl": "/images/carousel/carousel2.jpg"
        },
        {
            "name": "carousel2",
            "imageUrl": "/images/carousel/carousel3.png"
        }
    ];

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
        ],
    };

    const renderItemCarousel = () => {
        return data.map((item, index) => (
            <ItemComponent key={index} item={item} />
        ));
    };

    return (
        <section className='container py-5'>
            <div className='d-md-flex align-items-center'>
                <div className='col-md-4'>
                    <WrapperCarouselItem>
                        {renderItemCarousel()}
                    </WrapperCarouselItem>
                </div>
                <div className='col-md-8'>
                    <Slider {...settings}>
                        {carouselArr.map((caro, index) => (
                            <img width={"100%"} height="100%" key={index} src={caro.imageUrl} alt={caro.name} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
