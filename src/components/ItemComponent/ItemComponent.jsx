import React from 'react'
import './style.js'
import { WrapperItemComponent } from './style.js';
import { Col } from 'react-bootstrap';
export default function ItemComponent(props) {
    const { item } = props;

    return (
        <WrapperItemComponent className='text-left align-items-center'>
            <Col md={3} className='text-center'>
                <img width={"50px"} src={item.imageUrl} />
            </Col>
            <Col md={9}>
                {item.name}
            </Col>
        </WrapperItemComponent>
    )
}
